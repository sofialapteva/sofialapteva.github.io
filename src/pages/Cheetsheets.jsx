import { NavLink } from 'react-router-dom';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo'

export default function Cheetsheets() {
    const semanticOfTags = {
        "<h1>...<h6>": "Используй теги от <h1> до <h6>, чтобы размечать заголовки на странице.",
        "<p>": "Используйте тег <p>, чтобы превратить текст в абзац.",
        "<div>": "Элемент <div> группирует или оборачивает другие элементы и семантически ничего не значит.",
        "<address>": "<address> - контактные данные на странице. Так поисковым роботам будет удобнее.",
        "<blockquote>": "Для вставки большой цитаты на страницу - тег <blockquote>",
        "<q>": "Для вставки маленькой цитаты на страницу - тег <q>",
        "<br>": "<br> указывает на место разрыва строки и принудительного переноса текста на новую строку в рамках абзаца (стихотворение)",
        "<hr>": "<hr> - горизонтальная черта, которая разделяет смысловые блоки на странице.",
        "<bdo>": "Тег <bdo> переопределяет направление текста внутри (для соответствующих языков).",
        "<small>": "<small> используют для пояснений или небольших комментариев.",
        "<pre>": "<pre> - для отображения отформатированного текста, сохраняет все пробелы и переносы в HTML.",
        "<code>": "<code> используется для вывода фрагментов программного кода (+prism.js).",
        "<header>": "<header> - для создания «шапок» всего сайта или статьи.",
        "<footer>": "<footer> создаёт нижнюю часть страницы или блока — «подвал».",
        "<main>": "<main> - главное содержимое страницы, уникальный контент по теме страницы (1 на страницу).",
        "<section>": "<section> создаёт важный по смыслу большой логический блок.",
        "<article>": "<article> - законченный и самодостаточный раздел документа(карточка, статья, комментарий).",
        "<aside>": "<aside> может не имееть отношения к смыслу страницы (например, меню поиска по сайту)",
        "<nav>": "<nav> - ссылки для навигации по сайту.",

        "<span>": "<span> - строчный тег без смысловой нагрузки",
        "<time>": "<time datetime='2021-10-12'>12 октября 2021</time> -  для разметки дат.",
        "<sub> и <sup>": "<sub> и <sup> позволяет выводить (под-) и надстрочный текст, например, в формулах",
        "<del>": "<del> - для отображения контента, который по смыслу можно вычеркнуть (дело в ToDo).",
        "<ins>": "<ins> - для отображения контента, который был добавлен (дело в ToDo).",
        "<kbd>": "<kbd> обозначает пользовательский ввод (press F1 to continue)",
        "<mark>": "<mark> выделяет важный по смыслу фрагмент текста.",
        "<output>": "<output> - результаты вычислений или действий пользователя (для реактивности в HTML)",
        "<strong>": "<strong> добавляет обёрнутому в него слову или фразе ОЧЕНЬ высокую важность",
        "<em>": "<em> добавляет тексту смысловой акцент.",
        "<cite>": "<cite> - ccылка на источник цитаты/название произведения.",
        "<var>": "<var> - для выделения названия переменной.",
        "<dfn>": "<dfn> - определение, смысл которого описан в родительском абзаце текста.",

        "<form>": "<form> добавляет на страницу форму.",
        "<input>": "<input> - поле ввода, может быть разных типов.",
        "<fieldset>": "<fieldset> группирует элементы формы",
        "<optgroup>": "<optgroup label='countries'> группирует опции внутри элемента <select>",
        "<datalist>": "<datalist> оборачивает теги <option> в выпадающий список опций для поля <input>.",

        "": "",
        "<figure>, <figcaption>": "<figure> - для вёрстки изображений с поясняющей подписью <figcaption>",
        "<picture>": "<picture> с потомками <img> и <source> задает варианты изображения для разных условий отображения.",
        "<source>": "<source> позволяет указать несколько источников для видео (<video>), аудио (<audio>) или изображения (<picture>)",
        "<svg>": "<svg> используется в коде, чтобы это svg-изображение можно было динамически стилизовать.",


        "<a>": "<a> превращает любой объект в ссылку.",
        "<link>": "<link> загружает на страницу содержимое стилей/иконок и др.(можно использовать аттрибуты media и prefetch)",

        "<dl>, <dd>, <dt>": "Используются для вёрстки списка описаний («dl» означает «description list»)",
        "<iframe>": "<iframe> - онтейнер, который позволяет вставить любой HTML-документ из другого источника.",
        "<object>": "<object> - для встраивания на страницу других страниц или мультимедиа (PDF, видео, аудио)",
        "<embed>": "<embed> - старый тег для вставки на страницу контента в формате (например) pdf или flash.",
        "<details>, <summary>": "Блок с раскрывающимся контентом на чистом HTML (аккордеон).",
        "<meter>": "<meter> отображает числовое значение в заданном диапазоне (когда оно не меняется динамически)",
        "<progress>": "<progress> создаёт индикатор выполнения задачи, выглядит как прогресс-бар.",
        "<table> и потомки": "<table> служит для создания таблиц",
    }
    const tagNames = Object.keys(semanticOfTags)
    const tagSemantics = Object.values(semanticOfTags)
    return (
        <>
            <Header />
            <div className='w-8/12 lg:w-6/12 mx-auto'>
                <details>
                    <summary className="flex flex-col items-start justify-start cursor-pointer bg-gray-50 hover:bg-gray-100 py-4 px-6">
                        <li className="text-lg font-semibold text-gray-900">
                            Шпаргалка по тегам HTML
                        </li>
                        <p className="mt-2 text-sm text-gray-700">
                            По материалам <a href="https://doka.guide" rel="noreferrer" target={"_blank"} className='text-blue-600 hover:underline'>doka.guide</a>
                        </p>
                    </summary>
                    <div>
                        <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                        Название
                                                    </th>
                                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                        Назначение
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {tagNames.map((name, i) => (
                                                    <tr key={name}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                            {name}
                                                        </td>
                                                        <td className=" px-3 py-4 text-sm text-gray-500">{tagSemantics[i]}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        </>
    )
}
