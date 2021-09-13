import SkillInfo, {d} from "./SkillInfo";
import {Link} from "@material-ui/core";

import TypeScriptLogo from "../img/typescript.png";
import JavaScriptLogo from "../img/javascript.png";
import GolangLogo from "../img/golang.png";
import GreenWixLogo from "../img/greenwix.jpeg";
import KingCobraLogo from "../img/kingcobra.jpeg";
import NolikTopLogo from "../img/noliktop.jpeg";
import PhpLogo from "../img/php.png";
import CsharpLogo from "../img/csharp.png";
import CppLogo from "../img/cpp.png";
import PovezloPovezloLogo from "../img/povezlopovezlo.jpeg";

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Skills: SkillInfo[] = [
    {
        name: "PHP",
        color: "#8993be",
        started: d(2016, 1, 3),
        image: PhpLogo,
        rate: 4,
        description: (
            <span>Первый изучаемый мной язык программирования.
                На PHP писал cli приложения (сервера Minecraft Bedrock Edition
                на <Link href="https://github.com/pmmp/PocketMine-MP" target="_blank">PMMP</Link>-based ядрах),
                API (на своем фреймворке <Link href="https://github.com/GreenWix/prismaFrame" target="_blank">prismaFrame</Link>).
                Фреймворки Laravel, Yii2 и подобные не учил, но планирую в будущем их познать
            </span>
        ),
        projects: [{
            name: "prismaFrame",
            type: "Фреймворк",
            github: "https://github.com/GreenWix/prismaFrame",
            icon: <LibraryBooksIcon color="primary" />
        },{
            name: "SkyWars,MineBattles,Hub (GreenWix)",
            type: "Мини-игры",
            url: "https://greenwix.fun",
            image: GreenWixLogo
        }],
        tags: ["prismaFrame", "PMMP"]
    },{
        name: "TypeScript",
        color: "#4da2db",
        started: d(2019, 11),
        image: TypeScriptLogo,
        rate: 3,
        description: (
            <span>
                Люблю Material Design, поэтому писал только на
                фреймворке <Link href="https://material-ui.com/ru/" target="_blank">Material-UI</Link>.
                Использую <Link href="https://ru.reactjs.org/" target="_blank">React</Link>.
            </span>
        ),
        projects: [{
            name: "nolik.top",
            type: "Резюме (на Material-UI)",
            url: "https://nolik.top",
            github: "https://github.com/NolikTop/nolik.top",
            image: NolikTopLogo
        },{
            name: "shop.greenwix.fun",
            type: "Онлайн-магазин (на Material-UI)",
            url: "https://shop.greenwix.fun",
            image: GreenWixLogo
        },{
            name: "king-cobra.ru",
            type: "Лендинг (на Material-UI)",
            url: "https://king-cobra.ru",
            image: KingCobraLogo
        },{
            name: "Math Client",
            type: "Фронтенд для Math Server (ищите его в разделе C++)",
            github: "https://github.com/PovezloPovezlo/math_client",
            image: PovezloPovezloLogo
        }],
        tags: ["Material Design", "Material-UI", "React"]
    },{
        name: "Go",
        color: "#94DFD8",
        image: GolangLogo,
        rate: 2,
        description: (
            <span>
                На Go писал только менеджеры серверов и сервис для слежки за состоянием серверов
            </span>
        ),
        projects: [{
            name: "watcher",
            type: "Следит за состоянием указанных серверов и уведомляет в случае падения одного или нескольких из них",
            github: "https://github.com/GreenWix/watcher",
            icon: <VisibilityIcon color="primary" />
        },{
            name: "binary",
            type: "Библиотека для бинарной сериализации данных",
            github: "https://github.com/GreenWix/binary",
            icon: <LibraryBooksIcon color="primary" />
        },{
            name: "ServerManager (GreenWix)",
            type: "Менеджер серверов MineBattles, BuildBattle, MurderMystery. Умеет распределять игроков по серверам, запускать/отключать сервера",
            image: GreenWixLogo
        }],
        tags: []
    },{
        name: "C#",
        color: "#749c7a",
        image: CsharpLogo,
        rate: 2,
        description: (
            <span>

            </span>
        ),
        projects: [{
            name: "binary",
            type: "Библиотека для бинарной сериализации данных",
            github: "https://github.com/InStory/binary",
            icon: <LibraryBooksIcon color="primary" />
        },{
            name: "Центральный менеджер серверов Minecraft (GreenWix)",
            type: "Содержит в себе много разной кросс-серверной логики, в том числе репорт-систему (с системой слежки за игроками)",
            image: GreenWixLogo
        }],
        tags: []
    },{
        name: "JavaScript",
        color: "#FBF4CA",
        image: JavaScriptLogo,
        rate: 2,
        description: (
            <span>
                Ранее писал на JavaScript, однако я теперь использую TypeScript.
                Использовал фреймворки <Link href="https://materializecss.com/" target="_blank">Materialize</Link> и <Link href="https://github.com/VKCOM/VKUI" target="_blank">VKUI</Link>.
            </span>
        ),
        projects: [{
            name: "Личный Кабинет GreenWix",
            type: "VK Mini Apps приложение (JS, на VKUI)",
            url: "https://vk.com/app7066204",
            image: GreenWixLogo,
        },{
            name: "greenwix.fun",
            type: "Лендинг (JS, на Materialize)",
            url: "https://greenwix.fun",
            image: GreenWixLogo
        },{
            name: "account.greenwix.fun",
            type: "Личный кабинет (JS, на Materialize)",
            url: "https://account.greenwix.fun",
            image: GreenWixLogo
        }],
        tags: ["Materialize", "React", "VKUI"]
    },{
        name: "C++",
        color: "#6DB2F1",
        image: CppLogo,
        rate: 1,
        description: (
            <span>
                Работал в команде с одногруппниками над коллоквиумом по дискретной математике. Создавали библиотеку для работы с длинными числами. Я был главным программистом, весь процесс выстраивал я.
            </span>
        ),
        projects: [{
            name: "Math Server",
            type: "Математическая библиотека для работы с длинными числами и с идущим к ней веб-сервером (api и раздача фронта)",
            github: "https://github.com/PovezloPovezlo/math_server",
            image: PovezloPovezloLogo,
        }],
        tags: []
    },
];

export default Skills;
