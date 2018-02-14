use pt_link;
/*
INSERT INTO Users
  (id,username,password,email,isTeacher,createdAt,updatedAt)
  VALUES
  (DEFAULT,'ALex Smith','','test1@yahoo.com',false,'2018-02-07 03:58:27','2018-02-07 03:58:27'),
  (DEFAULT,'Bob Simpson','','test2@yahoo.com',false,'2018-02-07 03:58:27','2018-02-07 03:58:27'),
  (DEFAULT,'Nick Ross','','test3@yahoo.com',true,'2018-02-07 03:58:27','2018-02-07 03:58:27'),  
  (DEFAULT,'Susan Lee','','test4@yyahoo.com',true,'2018-02-07 03:58:27','2018-02-07 03:58:27');

*/
INSERT INTO Communications
  (id,subject,body,createdAt,updatedAt,senderId)
  VALUES
  (DEFAULT,'Test subject','test Body','2018-02-07 04:08:36','2018-02-07 04:08:36',3),
  (DEFAULT,'second subject','second Body','2018-02-07 04:08:36','2018-02-07 04:08:36',4);


INSERT INTO SentCommunications (id,unread,createdAt,updatedAt,recipientId,CommunicationId) 
VALUES 
(NULL,true,'2018-02-07 04:08:36','2018-02-07 04:08:36',1,2),
(NULL,true,'2018-02-07 04:08:36','2018-02-07 04:08:36',2,2),
(NULL,true,'2018-02-07 04:08:36','2018-02-07 04:08:36',3,2),
(NULL,true,'2018-02-07 04:08:36','2018-02-07 04:08:36',1,1),
(NULL,true,'2018-02-07 04:08:36','2018-02-07 04:08:36',2,1);


