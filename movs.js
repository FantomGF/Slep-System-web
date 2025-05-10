// Ждем загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  // Получаем ссылки на основные элементы
  const contents = document.querySelector(".contents");
  const footer = document.querySelector(".footer");

  // Функция обновления текущего времени в футере
  function updateFooterClock() {
    const currentTime = new Date().toLocaleTimeString();
    footer.innerHTML = `<h2 class="text1">Текущее время</h2><p class="text1">${currentTime}</p>`;
  }

  // Запускаем обновление времени каждую секунду
  setInterval(updateFooterClock, 1000);

  // Объект с контентом для каждого раздела, оформленным в официальном стиле
  const contentTexts = {
    alarm: `
    <h2 class="text1">Режим установки будильников</h2>
    <p class="text1">
      Рекомендуется установить основной будильник за 1 час до запланированного отхода ко сну. Такой сигнал означает необходимость завершить текущие дела, замедлиться и плавно перейти к состоянию отдыха.
    </p>
    <p class="text1">
      Для повышения эффективности режима сна важен также предупреждающий сигнал, который следует установить за 15–20 минут до основного (при индивидуальной необходимости – до 30–45 минут). Это позволяет подготовиться и дисциплинированно отреагировать на основной сигнал.
    </p>
    <p class="text1">
      Пропуск основного сигнала приводит к снижению его восприимчивости и может способствовать автоматическому его отключению. Поэтому с самого начала необходимо выработать привычку реагировать на него ответственно.
    </p>
    <p class="text1">
      В качестве лайфхака рекомендуется, сразу после звонка основного будильника на протяжении первых 30 секунд оторваться от текущих дел: встать, пройтись, сделать несколько глубоких вдохов и оценить, можно ли отложить незавершённые задачи. Этот подход способствует формированию положительной дисциплины и улучшению общей продуктивности.
    </p>
    <p class="text1">
      Дополнительно, выбор времени для отхода ко сну должен основываться на условиях темного времени суток, поскольку свет влияет на циркадные ритмы и выработку мелатонина. Регулярность режима, даже если он установлен, например, на 01:00, предпочтительнее случайного расписания.
    </p>
    <p class="text1">
    Это позволит успокоится перед сном и положительно повлиять на глубокий сон
    </p>
  `,
    food: `
     <h2 class="text1">Как связаны сон и питание</h2>
     <p class="text1">
       Сон и питание являются взаимосвязанными процессами. Недостаток сна способствует повышению уровня гормона голода (грелина) и снижению уровней гормона сытости (лептина), что ведет к увеличению калорийности рациона и росту потребления быстрых углеводов.
     </p>
     <p class="text1">
       Для улучшения качества сна и поддержания здорового баланса рекомендуется скорректировать вечернюю диету следующим образом:
     </p>
     <p class="text1">
       • <strong>Не принимать пищу за 2–3 часа до сна.</strong> Отказ от позднего ужина позволяет организму перейти в режим отдыха, так как переваривание тяжёлой пищи может затруднять засыпание.
     </p>
     <p class="text1">
       • <strong>Сократить потребление быстрых углеводов.</strong> Избыток калорийной, быстро усваиваемой пищи (фаст-фуд, сладости, мучные изделия) негативно влияет на длительность глубокого сна (SWS).
     </p>
     <p class="text1">
       • <strong>Употреблять продукты, способствующие качественному сну.</strong> Рекомендуется отдавать предпочтение таким продуктам, как киви и вишня, помогающим выработке серотонина, а также жирной рыбе или молоку – однако не следует сочетать их в одном приёме пищи. Продукты, богатые триптофаном (например, красная икра, голландский сыр, арахис, миндаль, кешью), также стимулируют выработку серотонина и способствуют улучшению сна.
     </p>
     <p class="text1">
       • <strong>Умеренно потреблять жидкости перед сном.</strong> Избегайте чрезмерного употребления напитков, так как это может привести к ночным пробуждениям.
     </p>
     <p class="text1">
       Такие рекомендации особенно важны для людей с предрасположенностью к ожирению и диабету, а также для тех, у кого наблюдаются нарушения сна.
     </p>

    `,
    star: `
     <h2 class="text1">Роль шишковидной железы и мелатонина</h2>
     <p class="text1">
       Супрахиазматическое ядро, регулирующее циркадные ритмы, тесно связано с шишковидной железой, которая вырабатывает мелатонин – гормон, способствующий засыпанию.
     </p>
     <p class="text1">
       Шишковидная железа, действующая как «повар», изменяет свою секрецию в зависимости от времени суток. Наибольший уровень мелатонина наблюдается с 00:00 до 08:00, что обусловливает ночное состояние, а после обеда наблюдается резкое повышение, вызывающее сонливость.
     </p>
     <p class="text1">
       Мелатонин играет важную роль не только в регуляции сна, но и в поддержании иммунной функции организма. При этом следует отметить, что клетки желудочно-кишечного тракта также способны синтезировать мелатонин.
     </p>
     <p class="text1">
       Важно подчеркнуть: прием мелатонина в таблетированной форме не является универсальной рекомендацией и должен осуществляться исключительно по назначению врача. Несанкционированный прием может повлечь нежелательные последствия.
     </p>
     <p class="text1">
       Систематические обзоры и мета-анализы, опубликованные авторитетной организацией Cochrane, демонстрируют эффективность приема мелатонина преимущественно при смене часовых поясов (Jet Lag), когда доза от 0,5 до 5 мг способствует улучшению засыпания и качества сна. В естественных условиях эффект может быть менее выражен в связи с ограниченной проницаемостью мелатонина через гематоэнцефалический барьер.
     </p>
     <p class="text1" style="font-weight: bold; color: #fff;">
       ВНИМАНИЕ: ПРИЕМ МЕЛАТОНИНА В ТАБЛЕТКАХ РЕКОМЕНДУЕТСЯ ТОЛЬКО ПО НАЗНАЧЕНИЮ ВРАЧА.
     </p>
     `,
    light: `
      <h2 class="text1">Свет и влияние на сон</h2>
      <p class="text1">
        Мы постепенно смещаем акцент с бытовых привычек на качество сна. Уже сегодня вводится дополнительный элемент вечернего ритуала.
      </p>
      <p class="text1">
        Один из отделов мозга — гипоталамус — отвечает за регуляцию наших желаний, включая желание спать. В его составе находится супрахиазматическое ядро, которое для удобства мы будем называть «шариком». Этот «шарик» контролирует отсчёт времени и привык к 24-часовому циклу, ориентируясь исключительно на естественное освещение.
      </p>
      <p class="text1">
        Искусственное освещение в мегаполисах, особенно в поздние часы, нарушает работу «шарика», что затрудняет выработку мелатонина – важнейшего гормона для засыпания.
      </p>
      <p class="text1">
        Рекомендуется за час до сна снизить освещённость в помещении, оставив лишь минимальное для ориентации (например, пару ламп или светильник), а также активировать ночной режим на смартфонах и ноутбуках, смягчающий яркость экрана и уменьшающий воздействие синего света на циркадные ритмы.
      </p>
      <p class="text1" style="font-weight: bold; color: #fff;">
        Особое внимание: исследования показывают, что полное отключение электронных устройств и яркого света за 15 минут до сна способствует восстановлению уровня мелатонина до нормальных значений.
      </p>
    `,
    zzz: `
      <h2 class="text1">Глубокий сон (медленноволновой сон)</h2>
      <p class="text1">
        Глубокий сон, или медленноволновой (Slow Wave Sleep, SWS), получил своё название благодаря преобладанию длинных дельта-волнов, зафиксированных при электроэнцефалографии в стадии 3 сна.
      </p>
        <img src="sws.png" alt="Глубокий сон" class="text1" style="display: block; margin: 10px auto; max-width: 100%;">
      <p class="text1">
        В этой фазе организм временно прекращает реагировать на внешние стимулы, что позволяет сосредоточиться на самовосстановлении. Медленноволновой сон обеспечивает критически важные функции для иммунитета, кроветворения, микрофлоры кишечника, секреции гормона роста, обмена веществ, регуляции инсулина и консолидации памяти.
      </p>
      <p class="text1">
        Оптимально, если глубокий сон занимает около 30% общего времени сна. Дополнительные техники, такие как медитативные сессии, доказали свою эффективность в повышении его качества.
      </p>

    `,
    watch: `
      <h2 class="text1">Значение циркадных ритмов для здоровья</h2>
      <p class="text1">
        Циркадные ритмы по своей природе настроены на естественный цикл: дневная активность и ночной отдых. Эта базовая конфигурация сформировалась за миллионы лет эволюции.
      </p>
      <p class="text1">
        Лица, предпочитающие ложиться спать поздно, имеют повышенный риск развития диабета, депрессии, сердечно-сосудистых, нейродегенеративных и онкологических заболеваний, что подтверждено крупными исследованиями.
      </p>
      <p class="text1">
        Для повышения продуктивности и улучшения ментального здоровья рекомендуется плавная коррекция режима сна, поскольку резкие изменения могут вызвать стресс.
      </p>
      <img src="circadian.png" alt="Циркадные ритмы" class="text1" style="display: block; margin: 10px auto; max-width: 100%;">
    `,
    // 🔹 Калькулятор качества сна
   calc: `
   <h2 class="text1">Калькулятор качества сна</h2>
    <form id="sleepForm">
        <div class="question">
            <label>Во сколько ты обычно ложишься спать?</label><br>
            <input type="radio" name="sleepTime" value="10"> До 22:00 🌟<br>
            <input type="radio" name="sleepTime" value="7"> 22:00 – 00:00 😊<br>
            <input type="radio" name="sleepTime" value="4"> После 00:00 ⚠️
        </div>
        <div class="question">
            <label>Как часто ты просыпаешься среди ночи?</label><br>
            <input type="radio" name="wakeUp" value="10"> Никогда 🌟<br>
            <input type="radio" name="wakeUp" value="7"> 1–2 раза 😊<br>
            <input type="radio" name="wakeUp" value="4"> Часто ⚠️
        </div>
        <div class="question">
            <label>Как ты себя чувствуешь утром после пробуждения?</label><br>
            <input type="radio" name="morningFeel" value="10"> Полон энергии 🌟<br>
            <input type="radio" name="morningFeel" value="7"> Нормально 😊<br>
            <input type="radio" name="morningFeel" value="4"> Уставший ⚠️
        </div>
        <div class="question">
            <label>Насколько регулярно ты ложишься спать?</label><br>
            <input type="radio" name="sleepRegularity" value="10"> Всегда в одно и то же время 🌟<br>
            <input type="radio" name="sleepRegularity" value="7"> Примерно в одно и то же время 😊<br>
            <input type="radio" name="sleepRegularity" value="4"> Каждый раз по-разному (разница больше 3 часов) ⚠️
        </div>
        <div class="question">
            <label>Использование гаджетов перед сном?</label><br>
            <input type="radio" name="gadgets" value="10"> Не использую 🌟<br>
            <input type="radio" name="gadgets" value="9"> За 15-30 минут до сна 🌟<br>
            <input type="radio" name="gadgets" value="7"> За 10-15 минут до сна 😊<br>
            <input type="radio" name="gadgets" value="4"> Прямо перед сном (менее 10 минут) ⚠️
        </div>
        <div class="question">
            <label>Комфорт спальни (свет, температура, шум)?</label><br>
            <input type="radio" name="roomComfort" value="10"> Тёмная, тихая, прохладная 🌟<br>
            <input type="radio" name="roomComfort" value="7"> Средний уровень комфорта 😊<br>
            <input type="radio" name="roomComfort" value="4"> Светло, шумно, жарко ⚠️
        </div>
        <div class="question">
            <label>Физическая активность в течение дня?</label><br>
            <input type="radio" name="physicalActivity" value="10"> Есть регулярные тренировки 🌟<br>
            <input type="radio" name="physicalActivity" value="7"> Иногда двигаюсь 😊<br>
            <input type="radio" name="physicalActivity" value="4"> Нет физической активности ⚠️
        </div>
        <div class="question">
            <label>Частота пробуждений ночью?</label><br>
            <input type="radio" name="wakeFrequency" value="10"> Вообще не просыпаюсь 🌟<br>
            <input type="radio" name="wakeFrequency" value="7"> 1-2 раза за ночь 😊<br>
            <input type="radio" name="wakeFrequency" value="4"> Часто просыпаюсь ⚠️
        </div>
        <div class="question">
            <label>Употребление кофеина или энергетиков перед сном?</label><br>
            <input type="radio" name="caffeine" value="10"> Не пью вечером 🌟<br>
            <input type="radio" name="caffeine" value="7"> Пью за 4-6 часов до сна 😊<br>
            <input type="radio" name="caffeine" value="4"> Пью незадолго до сна ⚠️
        </div>
        <div class="question">
            <label>Спишь ли ты днём, и как долго?</label><br>
            <input type="radio" name="napTime" value="10"> Не сплю днём или менее 40 минут 🌟<br>
            <input type="radio" name="napTime" value="7"> 40-60 минут 😊<br>
            <input type="radio" name="napTime" value="4"> Более 60 минут ⚠️
        </div>
        <button type="button" onclick="sleepqualitycalc()">Рассчитать качество сна</button>
        <div class="result" id="sleepResult"></div>
    </form>
   `,
  };


  // 🔹 Функция расчёта качества сна (доступна глобально)
  window.sleepqualitycalc = function () {
    let totalScore = 0;
    const form = document.getElementById("sleepForm");
    const inputs = form.querySelectorAll("input[type='radio']:checked");

    inputs.forEach(input => {
      totalScore += parseInt(input.value, 10);
    });

    let resultText = "";
    if (totalScore >= 80) {
      resultText = "🌟 Отличное качество сна!";
    }
    else if (totalScore >= 60) {
      resultText = "😊 Хороший, но можно улучшить.";
    }
    else if (totalScore >= 40) {
      resultText = "⚠️ Средний уровень, есть проблемы.";
    }
    else if (totalScore == 0) {
      resultText = "Тест не пройден, ни один вариант ответа не выбран";
    }
    else {
      resultText = "🔴 Низкий уровень, есть проблемы.";
    }

    document.getElementById("sleepResult").innerText = `Твой итоговый балл: ${totalScore}. ${resultText}`;
  };

  // Привязываем обработчики событий для кнопок меню
  // Привязываем обработчики событий для кнопок меню
   document.getElementById("alarm").addEventListener("click", function () {
     contents.innerHTML = contentTexts.alarm;
   });
   document.getElementById("food").addEventListener("click", function () {
     contents.innerHTML = contentTexts.food;
   });
   document.getElementById("star").addEventListener("click", function () {
     contents.innerHTML = contentTexts.star;
   });
   document.getElementById("light").addEventListener("click", function () {
     contents.innerHTML = contentTexts.light;
   });
   document.getElementById("zzz").addEventListener("click", function () {
     contents.innerHTML = contentTexts.zzz;
   });
   document.getElementById("watch").addEventListener("click", function () {
     contents.innerHTML = contentTexts.watch;
   });
   document.getElementById("calc").addEventListener("click", function () {
     contents.innerHTML = contentTexts.calc;
   });

   // 🔹 Калькулятор времени отхода ко сну
   document.getElementById("gosleep").addEventListener("click", function () {
     contents.innerHTML = `
       <h2 class="text1">Калькулятор времени отхода ко сну</h2>
       <p class="text1">Введите время, когда вам нужно проснуться:</p>
       <input type="time" id="wakeTime">
       <p class="text1">Сколько минут занимает засыпание?</p>
       <input type="number" id="fallAsleepTime" min="0" max="60" value="15">
       <button id="calculateSleep">Рассчитать</button>
       <p id="result" class="text1"></p>
     `;

     // Обработчик для расчета времени сна
     document.getElementById("calculateSleep").addEventListener("click", function () {
       let wakeTimeInput = document.getElementById("wakeTime").value;
       let fallAsleepMinutes = parseInt(document.getElementById("fallAsleepTime").value) || 15;

       if (!wakeTimeInput) {
         document.getElementById("result").innerText = "Пожалуйста, укажите время пробуждения.";
         return;
       }

       let wakeTime = new Date();
       let [hours, minutes] = wakeTimeInput.split(":").map(Number);
       wakeTime.setHours(hours);
       wakeTime.setMinutes(minutes);
       wakeTime.setSeconds(0);

       let sleepCycles = [6, 5, 4]; // Циклы сна от 4 до 9
       let optimalSleepTimes = [];

       sleepCycles.forEach(cycles => {
         let sleepTime = new Date(wakeTime.getTime() - cycles * 90 * 60 * 1000 - fallAsleepMinutes * 60 * 1000);
         let sleepHours = sleepTime.getHours().toString().padStart(2, "0");
         let sleepMinutes = sleepTime.getMinutes().toString().padStart(2, "0");
         optimalSleepTimes.push(`${sleepHours}:${sleepMinutes}`);
       });

       document.getElementById("result").innerHTML = `
         Вам лучше лечь спать в:<br>
         <strong>${optimalSleepTimes.join(" или ")}</strong>
       `;
     });
   });

 });
