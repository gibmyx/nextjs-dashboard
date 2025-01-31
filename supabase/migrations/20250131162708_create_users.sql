create table users
(
    id       UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name     text,
    email    text,
    password char(255)
);
