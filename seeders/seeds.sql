use pt_link;
INSERT INTO Users
  (id,username,password,email,isTeacher,createdAt,updatedAt)
  VALUES
  (DEFAULT,'Aaron','password123','test@yahoo.com',false,'2018-02-07 03:58:27','2018-02-07 03:58:27');
INSERT INTO Users
  (id,username,password,email,isTeacher,createdAt,updatedAt)
  VALUES
  (DEFAULT,'Shubha','password123','test1@yahoo.com',false,'2018-02-07 03:58:27','2018-02-07 03:58:27');
INSERT INTO Users
  (id,username,password,email,isTeacher,createdAt,updatedAt)
  VALUES
  (DEFAULT,'Brendan','password123','test2@yahoo.com',true,'2018-02-07 03:58:27','2018-02-07 03:58:27');
INSERT INTO Users
  (id,username,password,email,isTeacher,createdAt,updatedAt)
  VALUES
  (DEFAULT,'Andy','password123','test3@yahoo.com',false,'2018-02-07 03:58:27','2018-02-07 03:58:27');
INSERT INTO Users
  (id,username,password,email,isTeacher,createdAt,updatedAt)
  VALUES
  (DEFAULT,'Bob','password123','test4@yahoo.com',false,'2018-02-07 03:58:27','2018-02-07 03:58:27');

INSERT INTO Communications
  (id,subject,body,createdAt,updatedAt,senderId)
  VALUES
  (DEFAULT,'Test subject','test Body','2018-02-07 04:08:36','2018-02-07 04:08:36',3);

INSERT INTO UserCommunications (unread,createdAt,updatedAt,CommunicationId,UserId) 
VALUES 
(true,'2018-02-07 04:08:36','2018-02-07 04:08:36',1,1),
(true,'2018-02-07 04:08:36','2018-02-07 04:08:36',1,2),
(true,'2018-02-07 04:08:36','2018-02-07 04:08:36',1,3);


INSERT INTO Communications
  (id,subject,body,createdAt,updatedAt,senderId)
  VALUES
  (DEFAULT,'Test subject2','test Body2','2018-02-07 04:08:36','2018-02-07 04:08:36',2);

INSERT INTO UserCommunications (unread,createdAt,updatedAt,CommunicationId,UserId) 
VALUES 
(true,'2018-02-07 04:08:36','2018-02-07 04:08:36',2,2),
(true,'2018-02-07 04:08:36','2018-02-07 04:08:36',2,3),
(true,'2018-02-07 04:08:36','2018-02-07 04:08:36',2,4);