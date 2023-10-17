/*
Faccio una query unica sia di inserimento che di modifica qual'ora il token passato fosse lo stesso.

*/

INSERT INTO TABLE (id, name, age) VALUES(1, "A", 19) 
ON DUPLICATE KEY UPDATE NAME = "A", AGE = 19;  

REPLACE INTO table (id, name, age) VALUES(1, "A", 19);

IF EXISTS(select id from token_notifiche where token=@token)
   update token_notifiche set update_ins=now() where id=(select id from token_notifiche where token=@token)
ELSE
 insert into token_notifiche(token, id_utente, id_portale, info_browser, ip) values('@token', '@id_operatore', '@id_portale', '@info_browser_json', '@ip');
