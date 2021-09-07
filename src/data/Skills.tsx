import SkillInfo from "./SkillInfo";
import {Link} from "@material-ui/core";
import TypeScriptLogo from "../img/typescript.png";


const Skills: SkillInfo[] = [
    {
        name: "PHP",
        color: "#8993be",
        started: "января 2016",
        image: "https://www.php.net/images/logos/new-php-logo.png",
        rate: 4,
        description: (
            <span>Первый изучаемый мной язык программирования. На PHP писал либо cli приложения (сервера Minecraft Bedrock Edition на <Link href="https://github.com/pmmp/PocketMine-MP">PMMP</Link>-based ядрах), либо API (на своем фреймворке <Link href="https://github.com/GreenWix/prismaFrame">prismaFrame</Link>). Не использовал такие фреймворки как Laravel, Yii.</span>
        ),
        projects: [{
            name: "prismaFrame",
            type: "Фреймворк",
            url: "https://github.com/GreenWix/prismaFrame",
            image: "https://sun9-78.userapi.com/s/v1/ig2/XkeY4kvrKegixsLp3jiZy0oymf_YHJ8TCcb7b-GsMXDGOYUCc78upVTg_zaFdixImjaZ06qwrQMuZG61o4AQXDnQ.jpg?size=100x100&quality=96&crop=150,135,1200,1200&ava=1"
        },{
            name: "SkyWars,MineBattles,Hub",
            type: "Мини-игры",
            url: "https://greenwix.fun",
            image: "https://sun9-78.userapi.com/s/v1/ig2/XkeY4kvrKegixsLp3jiZy0oymf_YHJ8TCcb7b-GsMXDGOYUCc78upVTg_zaFdixImjaZ06qwrQMuZG61o4AQXDnQ.jpg?size=100x100&quality=96&crop=150,135,1200,1200&ava=1"
        }]
    },{
        name: "TypeScript",
        color: "#8993be",
        started: "января 2016",
        image: TypeScriptLogo,
        rate: 4,
        description: (
            <span>Первый изучаемый мной язык программирования. На PHP писал либо cli приложения (сервера Minecraft Bedrock Edition на <Link href="https://github.com/pmmp/PocketMine-MP">PMMP</Link>-based ядрах), либо API (на своем фреймворке <Link href="https://github.com/GreenWix/prismaFrame">prismaFrame</Link>). Не использовал такие фреймворки как Laravel, Yii.</span>
        ),
        projects: [{
            name: "prismaFrame",
            type: "Фреймворк",
            url: "https://github.com/GreenWix/prismaFrame",
            image: "https://sun9-78.userapi.com/s/v1/ig2/XkeY4kvrKegixsLp3jiZy0oymf_YHJ8TCcb7b-GsMXDGOYUCc78upVTg_zaFdixImjaZ06qwrQMuZG61o4AQXDnQ.jpg?size=100x100&quality=96&crop=150,135,1200,1200&ava=1"
        },{
            name: "SkyWars,MineBattles,Hub",
            type: "Мини-игры",
            url: "https://greenwix.fun",
            image: "https://sun9-78.userapi.com/s/v1/ig2/XkeY4kvrKegixsLp3jiZy0oymf_YHJ8TCcb7b-GsMXDGOYUCc78upVTg_zaFdixImjaZ06qwrQMuZG61o4AQXDnQ.jpg?size=100x100&quality=96&crop=150,135,1200,1200&ava=1"
        }]
    },
];

export default Skills;
