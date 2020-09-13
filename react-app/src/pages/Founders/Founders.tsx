import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const names = [
  'Anonymous',
  'Lucas Alvarez',
  'Michelle Arcaro',
  'TJ Arcaro',
  'Norma Asher',
  'Cameron Bajus',
  'Nancy Baron',
  'Jack Beauregard',
  'Sam Belisle',
  'Nicholas Bova',
  'Christina Brooks',
  'Tina Brown',
  'Emily Burri',
  'Bruce Carpenter',
  'Manuel Castillo',
  'Benjamin Catalano',
  'Susan Catalano',
  'Christopher Chaffin',
  'David Chaffin',
  'Xiuman Chaffin',
  'Yanqing Chen',
  'Fun China',
  'Mitchell Cohen',
  'Morissa Cohen',
  'George Colgrove',
  'Kyler Connare',
  'Dorinda Courtine-White',
  "Logan D'Auria",
  "Ronin D'Auria",
  'Patricia DeLorenzo',
  'Thomas DeLorenzo',
  'Simon Demirjian',
  'Suzanne Demirjian',
  'William Dickinson',
  'John Dickson',
  'Tracy DiPerri',
  'Melanie Wong Dodge',
  'Ron Dodge',
  'Michael Doyle',
  'Elise Dubinsky',
  'Connor Dudarchik',
  'Satyendra Emani',
  'Raquel Estrada',
  'Ohan Fillbach',
  'Joe Gallo',
  'Buck Gandley',
  'Dana Gannon',
  'Zachary Gannon',
  'Mary Gentile',
  'Jill Gerard',
  'Ryan Gillie',
  'Marisela Giordano',
  'Coehl Gleckner',
  'Kayla Green',
  'Jacob Gutwirth',
  'Thomas Hahn',
  'Jacob Heimes',
  'Neil Hiranandani',
  'Sanjay Hiranandani',
  'Willie Hirsh',
  'Maximilian Italiaander',
  'Darius James',
  'Lance James',
  'Kanyang Jiang',
  'Atulya John',
  'Alex Johnson',
  'Judy Johnson',
  'David Johnston',
  'Daniel Jost',
  'Kandice King',
  'Daniel Kitchen',
  'MiKenzie Kusenberger',
  'Tom & Gretchen Langan',
  'Wolveridge Langan',
  'Ashley Leahman',
  'Jeremy Leahman',
  'Patrick Leahman',
  'Ruth Leahman',
  'Deanne Leahman-Nail',
  'Jeremy Lefurge',
  'Qunxing Lei',
  'Ryan Lei',
  'Chum Li',
  'Hillary Li',
  'Shawn Liu',
  'Spencer Logan',
  'Nash Lyke',
  'Talen Mackinnon',
  'Michael Madden',
  'Jacob Marcovecchio',
  'Bryson McIver',
  'Ryan McMahon',
  'Evan Mikulski',
  'Thomas Mineo',
  'Evan Misiorski',
  'Elizabeth Winthrop Montgomery',
  'William Montgomery',
  'Sylvia Mosquea',
  'James Mundinger',
  'Alejandro Munoz',
  'Robert Nakamura',
  'Conni Nardo',
  'Randy Nguyen',
  'John Niemynski',
  'Nancy Niemynski',
  'Nick Pembroke',
  'Alex Rainone',
  'Michael Reniere',
  'Jacob Rich',
  'Carlos Rodriguez',
  'Fernando Rodriguez',
  'Jesse Roux',
  'Dominic Russo',
  'Heather Sauceda',
  'Mark Scott',
  'Elliot Sheaff',
  'Gina Shevchuk',
  'Joe Stio',
  'Freddy Stock',
  'George Stollsteimer',
  'Kim Sulkava',
  'Joseph St. Pierre',
  'Pietari Sulkava',
  'Nick Taber',
  'Billie Walden',
  'Cleon Walden',
  'Trevor Walden',
  'Gregory Waxman',
  'Elizabeth Weller',
  'Mistie West',
  'Stevie West',
  'Quinn White',
  'Lukas Wiedemann',
  'Laura Wieme',
  'Gillian Withers',
  'Porter Withers',
  'Matthew Wood',
  'Amy Yan',
  'AnAn Yu',
  'KeCheng Yu',
  'Zack Zand',
  'Paul Zenie',
  'Jeremiah Zucker',
];

const useStyles = makeStyles((theme) => createStyles({
  title: {
    margin: theme.spacing(3),
  },
  messages: {
    margin: theme.spacing(3),
  },
}));

const Founders: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" align="center" className={classes.title}>Founders</Typography>
      <Typography variant="h5" align="center" className={classes.messages}>RIT Esports was founded by Evan Hirsh, Peter Lam, Joseph Farrell, Andy Kukielka, Winnie Chen, and Chad Weeden along with the support of:</Typography>
      <Grid container>
        {names.map((name) => (
          <Grid key={name} item xs={12} sm={4}>
            <Typography align="center">{name}</Typography>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" align="center" className={classes.messages}>RIT Esports sincerely thanks all of those who donated in our initial 2018 funding campaign. These generous donations created the foundation that has allowed us to grow into the organization we are today, and has in large part contributed to our continued success. From all of our current and former members, thank you.</Typography>
    </Container>
  );
};

export default Founders;
