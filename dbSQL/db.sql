CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  oderNum VARCHAR(50) GENERATED ALWAYS AS ( generate_custom_id(id)) STORED,
  intro varchar(20),
  customerType varchar(20),
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  current boolean,
  orderType varchar(20),
  phone varchar(20),
  email varchar(30),
  address varchar(200),
  weight varchar(10),
  height varchar(10),
  level varchar(20),
  approvedBy varchar(20),
  style varchar(20),
  length varchar(10),
  width varchar(10),
  thickness varchar(10),
  volume varchar(10),
  tail varchar(10),
  blank varchar(20),
  construction varchar(20),
  boardColor varchar(20),
  finSetup varchar(20),
  boxType varchar(20),
  boxColor varchar(20),
  inserts varchar(20),
  rearStrap varchar(20),
  strapWidth varchar(20),
  stance varchar(20),
  leash varchar(20),
  pads varchar(20),
  waves varchar(20),
  finFromTail varchar(20),
  boxLocation varchar(20),
  rearInsertsFromTail varchar(20),
  handle boolean,
  created_at timestamp default current_timestamp
);

CREATE FUNCTION generate_custom_id(id INT)
returns text
as
$$
  SELECT 'FM' || TO_CHAR(now(), 'YY')|| '_' || TO_CHAR(id,'FM0000');
$$
language sql
immutable;

-- test
INSERT INTO orders (firstName, lastName, current, orderType, phone, email, address, weight, height, level, style, tail, construction, boardColor, finSetup)
VALUES ('goksu', 'okar', 'false', 'walkin', '8083854668', 'goksu@gmail.com', '284 Ikalani Pl. Makawao, Hawaii, 96768', '145', '5.7', 'advanced', 'asymmetrical', 'swallow', 'carbon', 'pink', 'quad');