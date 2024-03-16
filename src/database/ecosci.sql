create table photos_signalisations(
    id serial primary key,
    signalisation_id int,
    image_bits,
    foreign key (signalisation_id) signalisations(id)
);

create table photos_sensibilisations(
    id serial primary key,
    sensiblisation_id int,
    image_bits,
    foreign key (sensiblisation_id) sensibilisations(id)
);

create table photos_centres(
    id serial primary key,
    centre_id int,
    image_bits,
    foreign key (centre_id) centres(id)
);

create table photos_partages(
    id serial primary key,
    partage_id int,
    image_bits,
    foreign key (partage_id) partages(id)
);