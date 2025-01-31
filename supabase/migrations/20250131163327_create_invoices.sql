CREATE TABLE invoices
(
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customers (id),
    amount      INTEGER NOT NULL,
    status      TEXT    NOT NULL,
    date        DATE    NOT NULL
);