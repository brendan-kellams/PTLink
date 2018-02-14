use pt_link;
INSERT INTO Users
  (id,username,password,email,isTeacher,createdAt,updatedAt)
  VALUES
  (DEFAULT,'ALex Smith','$2a$10$D9nVoRZROL4KXw1otsG0zOVkAy8HWzq06vG9PA3OhO/UBaviai/GO','test1@yahoo.com',false,'2018-02-07 03:58:27','2018-02-07 03:58:27'),
  (DEFAULT,'Bob Simpson','$2a$10$D9nVoRZROL4KXw1otsG0zOVkAy8HWzq06vG9PA3OhO/UBaviai/GO','test2@yahoo.com',false,'2018-02-07 03:58:27','2018-02-07 03:58:27'),
  (DEFAULT,'Nick','$2a$10$D9nVoRZROL4KXw1otsG0zOVkAy8HWzq06vG9PA3OhO/UBaviai/GO','test2@yahoo.com',true,'2018-02-07 03:58:27','2018-02-07 03:58:27'),  
  (DEFAULT,'Susan Lee','$2a$10$D9nVoRZROL4KXw1otsG0zOVkAy8HWzq06vG9PA3OhO/UBaviai/GO','test3@yyahoo.com',true,'2018-02-07 03:58:27','2018-02-07 03:58:27');


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


