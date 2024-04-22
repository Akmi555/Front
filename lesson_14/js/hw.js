let players = [
    {name: "Alex", height: 190, weight: 85, sport: "rugby"},
    {name: "Boris", height: 180, weight: 75, sport: "football"},
    {name: "Vladimir", height: 175, weight: 70, sport: "hockey"},
    {name: "George", height: 185, weight: 80, sport: "rugby"},
    {name: "Dmitry", height: 170, weight: 65, sport: "hockey"},
    {name: "Eugene", height: 195, weight: 90, sport: "football"},
    {name: "Zachary", height: 188, weight: 82, sport: "rugby"},
    {name: "Ivan", height: 182, weight: 77, sport: "football"},
    {name: "Kirill", height: 178, weight: 73, sport: "hockey"},
    {name: "Leonid", height: 192, weight: 87, sport: "rugby"},
    {name: "Michael", height: 176, weight: 71, sport: "hockey"},
    {name: "Nicholas", height: 198, weight: 93, sport: "football"},
    {name: "Oleg", height: 186, weight: 79, sport: "rugby"},
    {name: "Paul", height: 174, weight: 69, sport: "hockey"},
    {name: "Roman", height: 184, weight: 78, sport: "football"}
    ];
    let playersCopy =[...players];
    const ff =(Object) => {
        playersCopy.push ("goals :" +  Math.floor(Math.random() * 20));

    }
    players.forEach(ff);
    console.log(playersCopy);


// let players = [
//     {name: "Alex", height: 190, weight: 85, sport: "rugby"},
//     {name: "Boris", height: 180, weight: 75, sport: "football"},
//     {name: "Vladimir", height: 175, weight: 70, sport: "hockey"},
//     {name: "George", height: 185, weight: 80, sport: "rugby"},
//     {name: "Dmitry", height: 170, weight: 65, sport: "hockey"},
//     {name: "Eugene", height: 195, weight: 90, sport: "football"},
//     {name: "Zachary", height: 188, weight: 82, sport: "rugby"},
//     {name: "Ivan", height: 182, weight: 77, sport: "football"},
//     {name: "Kirill", height: 178, weight: 73, sport: "hockey"},
//     {name: "Leonid", height: 192, weight: 87, sport: "rugby"},
//     {name: "Michael", height: 176, weight: 71, sport: "hockey"},
//     {name: "Nicholas", height: 198, weight: 93, sport: "football"},
//     {name: "Oleg", height: 186, weight: 79, sport: "rugby"},
//     {name: "Paul", height: 174, weight: 69, sport: "hockey"},
//     {name: "Roman", height: 184, weight: 78, sport: "football"}
// ];

// // Create a new array with added 'goals' property
// let playersCopy = players.map(player => {
//     return {
//         ...player,
//         goals: Math.floor(Math.random() * 21) // Random value between 0 and 20
//     };
// });

// console.log(playersCopy);
