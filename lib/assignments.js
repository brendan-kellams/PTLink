var db = require('../models');

const assignments = [];

const createAssignments = function(cb) {
  db.Classroom.findAll()
  .then(function(classrooms) {
    let subjectAssignments;
    for (let i = 0; i < classrooms.length; i++) {
      switch (classrooms[i].dataValues.subject) {
        case 'Math' :
          subjectAssignments = mathAssignments;
          break;
        case 'Science' :
          subjectAssignments = scienceAssignments;
          break;
        case 'English' :
          subjectAssignments = englishAssignments;
          break;
        case 'History' :
          subjectAssignments = historyAssignments;
          break;
        case 'Spanish' :
          subjectAssignments = spanishAssignments;
          break;
        case 'Art' :
          subjectAssignments = artAssignments;
          break;
        case 'Music' :
          subjectAssignments = musicAssignments;
          break;
        default:
          subjectAssignments = [];
          break;
      }
      for (let j = 0; j < subjectAssignments.length; j++) {
        var currentAssignment = Object.assign({}, subjectAssignments[j]);
        currentAssignment.ClassroomId = classrooms[i].id;
        assignments.push(currentAssignment);
      }
    }
    cb(assignments);
  });
}

const mathAssignments = [
  {
    lessondate: '02/19/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Complete the square',
    homework: 'The students are expected to proove the quadradic formula.',
    duedate: '02/20/2018'
  },
  {
    lessondate: '02/20/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Square Root',
    homework: 'The students are expected to complete their square root worksheet.',
    duedate: '02/21/2018'
  },
  {
    lessondate: '02/21/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Factoring',
    homework: 'The students are expected to finish factoring homework.',
    duedate: '02/22/2018'
  },
  {
    lessondate: '02/22/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Infinate series sum',
    homework: 'The students are expected to master the Taylor series.',
    duedate: '02/23/2018'
  }
]

const scienceAssignments = [
  {
    lessondate: '02/19/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Biology',
    homework: 'Map the human genome.',
    duedate: '02/20/2018'
  },
  {
    lessondate: '02/20/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Physics',
    homework: 'Proove Newton\'s three laws',
    duedate: '02/21/2018'
  },
  {
    lessondate: '02/21/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Astro-Physics',
    homework: 'Prove general relativity and special relativity.',
    duedate: '02/22/2018'
  },
  {
    lessondate: '02/22/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Chemistry',
    homework: 'Find element 119',
    duedate: '02/23/2018'
  }
]

const spanishAssignments = [
  {
    lessondate: '02/19/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Verbs',
    homework: 'Practice verb list',
    duedate: '02/20/2018'
  },
  {
    lessondate: '02/20/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Places',
    homework: 'Practice the various list of Places',
    duedate: '02/21/2018'
  },
  {
    lessondate: '02/21/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Translation',
    homework: 'Translate Spanish words to English',
    duedate: '02/22/2018'
  },
  {
    lessondate: '02/22/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Make simple sentences',
    homework: 'Write 10 sentences about yourself in Spanish',
    duedate: '02/23/2018'
  }
]

const englishAssignments = [
  {
    lessondate: '02/19/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'chapter 1',
    homework: 'Complete questions at the end of chapter 1',
    duedate: '02/20/2018'
  },
  {
    lessondate: '02/20/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'chapter 2',
    homework: 'Write a paragraph about your favorite charater',
    duedate: '02/21/2018'
  },
  {
    lessondate: '02/21/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'chapeter 3',
    homework: 'Write about the setting ',
    duedate: '02/22/2018'
  },
  {
    lessondate: '02/22/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'chapter 4',
    homework: 'Compare and Contrast about the two main characters in the book',
    duedate: '02/23/2018'
  }
]

const historyAssignments = [
  {
    lessondate: '02/19/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'PreHistory',
    homework: 'Study  The Neolithic Period',
    duedate: '02/20/2018'
  },
  {
    lessondate: '02/20/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Ancient Mesopotamia ',
    homework: 'Complete work on Early Mesopotamia',
    duedate: '02/21/2018'
  },
  {
    lessondate: '02/21/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'World Religions',
    homework: 'Write about four Religions of World',
    duedate: '02/22/2018'
  },
  {
    lessondate: '02/22/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'The Middle Ages',
    homework: 'Complete the timeline of The Crusades',
    duedate: '02/23/2018'
  }
]

const artAssignments = [
  {
    lessondate: '02/19/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Creativity',
    homework: 'Decorate Plastic cup using recycled materials',
    duedate: '02/20/2018'
  },
  {
    lessondate: '02/20/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Leonardo da Vinci',
    homework: 'Complete the drawing from class',
    duedate: '02/21/2018'
  },
  {
    lessondate: '02/21/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Sun Catchers',
    homework: 'Create your own with materials provided',
    duedate: '02/22/2018'
  },
  {
    lessondate: '02/22/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Cameo Portraits',
    homework: 'Create a Master Piece',
    duedate: '02/23/2018'
  }
]

const musicAssignments = [
  {
    lessondate: '02/19/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Art Music',
    homework: 'Write music verses',
    duedate: '02/20/2018'
  },
  {
    lessondate: '02/20/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'World Music ',
    homework: 'Read about different kinds of Music all around',
    duedate: '02/21/2018'
  },
  {
    lessondate: '02/21/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Movie Soundtracks',
    homework: 'Create 2-min short video for a soundtrack',
    duedate: '02/22/2018'
  },
  {
    lessondate: '02/22/2018',
    link: 'https://docs.google.com/document/d/15Q9OEomdZCT_F3eZc7fi5Qd_PI5-OYuzNCdVLnSIsx4/edit',
    topics: 'Video game composer',
    homework: 'Compose music that matches your favorite video game',
    duedate: '02/23/2018'
  }
]
module.exports = {
  createAssignments: createAssignments
}