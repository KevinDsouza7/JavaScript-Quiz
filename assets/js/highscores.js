let highScores = [];

const saveHighScore = (initials, score) => {
  const newScore = { initials, score };
  highScores.push(newScore);
 //high to low scores
  highScores.sort((a, b) => b.score - a.score);
  //only top 10
  highScores = highScores.slice(0, 10);
};

// Export saveHighScore & highScores
export { saveHighScore, highScores }; 