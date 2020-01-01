let images = [];
let datas = [];


const LeaderBoardReceiveAvatar = (playerId, imageString) => {
    images[playerId] = imageString;
};

const LeaderBoardReceiveData = (playerId, data) => {
    datas[playerId] = {};
    datas[playerId] = JSON.parse(data);
};

const renderPlayer = (player, k) => {
    // Cgheck name lenght and if too big then marquee it
    const name = player.name;
    const finalName = name.length > 15 ? `${name.substring(0, 15)}` : name;
    const template = `
        <div class="leaderboard_row ${k === 0 ? "leader" : ""}" id="row">
            <div class="leaderboard_image">
                <img src="data:image/jpg;base64,${images[player.id]}" />
            </div>
            <div class="leaderboard_player_name">
                ${finalName}
            <div>
            </div>
            <div>
                Level ${player.lvl}
            </div>
        </div>
    `;

    // $("#row-" + player.data.id).remove();
    $("#leaderboardContent").append(template);
};

const loop = () => setInterval(() => {
    $("#leaderboardContent").empty();
    [...datas].sort((a, b) => {
        return b.lvl - a.lvl;
    })
    .splice(0, 3)
    .forEach(renderPlayer);
}, 1500);


$(document).ready(loop);
