//Declares trainers name
const trainerName = 'Prince';
const trainerName2 = 'Warren';

//Generate random event typesj for trainers
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

//Sets events training days for trainers
const getTrainingDays = trainerEvent => {
  let days;
  if (trainerEvent === 'Marathon') {
    days = 50;
  } else if (trainerEvent === 'Triathlon') {
    days = 100;
  } else if (trainerEvent === 'Pentathlon') {
    days = 200;
  }
  return days;
};

//Logs events type and time for trainers
const logEvent = (trainerName, trainerEvent) => {
  console.log(`${trainerName}'s event is: ${trainerEvent}`);
};
const logTime = (trainerName, trainerDays) => {
  console.log(`${trainerName}'s time to train is: ${trainerDays} days`);
};

//Test
const event1 = getRandEvent();
const days = getTrainingDays(event1);
logEvent(trainerName, event1);
logTime(trainerName, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
logEvent(trainerName2, event2);
logTime(trainerName2, days2);
