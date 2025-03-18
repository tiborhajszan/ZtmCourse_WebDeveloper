
// Exercise: ES2023

// monster array

const ztmMonsters = [
{id: 1, monster: 'Mr. Mouse', level: 1},
{id: 2, monster: 'Mac', level: 30},
{id: 3, monster: 'Denodude', level: 17},
{id: 4, monster: 'Pye', level: 5},
];

// old method

const advancedMonsters = ztmMonsters.filter(item => 15 < item.level);
console.log(advancedMonsters);
console.log(advancedMonsters[advancedMonsters.length-1]);

// findLast() method

const lastMonster = ztmMonsters.findLast(item => 15 < item.level);
console.log(lastMonster);

// findLastIndex() method

const lastMonsterIndex = ztmMonsters.findLastIndex(item => 15 < item.level);
console.log(lastMonsterIndex);

// monster list

const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];

// reverse() method

const reverseMonsters = ztmMonstersList.reverse();
console.log(ztmMonstersList);
console.log(reverseMonsters);

// toReversed() method

const reversedMonstersTo = ztmMonstersList.toReversed();
console.log(ztmMonstersList);
console.log(reversedMonstersTo);

// toSorted() method

const sortedMonstersTo = ztmMonstersList.toSorted();
console.log(ztmMonstersList);
console.log(sortedMonstersTo);

// toSpliced() method

const spliceMonstersTo = ztmMonstersList.toSpliced(2, 1);
console.log(ztmMonstersList);
console.log(spliceMonstersTo);

// updating item with [] operator

ztmMonstersList[1] = 'Gost';
console.log(ztmMonstersList);

// with() method

const withMonsters = ztmMonstersList.with(1, 'Denodude');
console.log(ztmMonstersList);
console.log(withMonsters);
