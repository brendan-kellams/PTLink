var db = require('../models');

const messages = [];
const welcomeMessageBody = "Welcome to my class I hope you are excited for the semester! If you have any questions about the class please feel free to reach out to me here on PT Link.";
const parentMessages = [
  {
    subject: 'Dillion out sick',
    body: 'Hi,\n\n\tI just wanted to let you know that Dillion will be out sick today. I will check here for any homework assignments that were covered so we can make sure he makes them up.\n\nThanks!'
  },
  {
    subject: 'Question about homework',
    body: 'Hello,\n\n\tI have a question about last week\'s homework assignment. On PT Link the due date is for next week but my daughter Lisa is telling me that it is due tommorrow. Can you please verify what the actual due date is?\n\nBest, Lisa\'s mom'
  },
  {
    subject: 'Spring break project',
    body: 'Greetings,\n\n\tMy family and I are going on a spring break vacation in the mountains. My son has a project that is to be worked on during spring break. I was hoping we could arrange it so he could turn in his project before the break so he can have the whole time with the family.\n\nLet me know if this will work.'
  },
  {
    subject: 'Multiple late assignments',
    body: 'Hello,\n\n\tIt appears that my child has been turning in several assignments late over the last month. I wanted to bring this to your attention because I think he is really struggling with the class. Is there any time after or before school that he could get some one-on-one time with you to go over the material?\n\nBest regards.'
  },
]

var completeParentMessages = [];

const createMessages = function(cb) {
  createTeacherWelcomeMessages(function() {});
  createParentMessages(function() {
    cb();
  });
}

const createParentMessages = function(cb) {
  db.User.findAll({
    attributes: ['id'],
    where: {
      isTeacher: false
    }
  })
  .then(function(parents) {
    db.User.findAll({
      where: {
        isTeacher: true
      }
    })
    .then(function(teachers) {
      for (let i = 0; i < parents.length; i++) {
        if (Math.floor((Math.random() * 3) + 1) === 1) {
          let randomTeacher = teachers[Math.floor(Math.random() * 6)].dataValues.id;
          let newMessage = Object.assign({}, parentMessages[Math.floor(Math.random() * 3)]);
          newMessage.senderId = parents[i].dataValues.id;
          newMessage.recipients = [randomTeacher]
          completeParentMessages.push(newMessage);
        }
      }
      createAndSendMessages(completeParentMessages, function() {
        cb();
      })
    })
  })
}

const createAndSendMessages = function(data, cb) {
  for (let i = 0; i < data.length; i++) {
    db.Communication.create({
      subject: data[i].subject,
      body: data[i].body,
      senderId: data[i].senderId
    })
    .then(function(communication) {
      db.SentCommunication.create({
        recipientId: data[i].recipients,
        unread: true
      })
      .then(function(sentCommunication) {
        communication.setSentCommunications(sentCommunication);
        cb();
      })
    })
  }
}

const createTeacherWelcomeMessages = function(cb) {
  db.Classroom.findAll({
    include: [
      {
        model: db.Participant
      },
      {
        model: db.User,
        as: 'instructor'
      }
    ]
  })
  .then(function(classrooms) {
    for (let i = 0; i < classrooms.length; i++) {
      let instructorName = classrooms[i].dataValues.instructor.dataValues.username;
      let instructorId = classrooms[i].dataValues.instructorId;
      let period = classrooms[i].dataValues.period;
      let subject = classrooms[i].dataValues.subject;
      let grade = classrooms[i].dataValues.grade;
      let messageSubject = "Welcome to " + instructorName + "'s " + subject + " class (period " + period + " - grade " + grade + ")";
      let emails = [];
      for (let j = 0; j < classrooms[i].dataValues.Participants.length; j++) {
        emails.push(classrooms[i].dataValues.Participants[j].dataValues.userEmail);
      }
      db.User.findAll({
        attributes: ['id'],
        where: {
          email: emails
        }
      })
      .then(function(users) {
        let recipients = [];
        for (let i = 0; i < users.length; i++) {
          console.log(users[i]);
          recipients.push({
            recipientId: users[i].dataValues.id,
            unread: true
          });
        }
        db.Communication.create({
          subject: messageSubject,
          body: welcomeMessageBody,
          senderId: instructorId
        })
        .then(function(communication) {
          db.SentCommunication.bulkCreate(recipients)
          .then(function(sentCommunications) {
            communication.setSentCommunications(sentCommunications);
            cb();
          })
        })
      })
    }
  })
}

module.exports = {
  createMessages: createMessages
}