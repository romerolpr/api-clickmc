CREATE TABLE db_fullstack.tb_users (
	id INT auto_increment NULL,
	name varchar(256) NOT NULL,
	cpf varchar(100) NOT NULL,
	email varchar(256) NOT NULL,
	address varchar(100) NOT NULL,
	last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	description varchar(256) NULL,
	backdrop varchar(100) DEFAULT #007bff NULL,
	status BOOL DEFAULT 1 NOT NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
