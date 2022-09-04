
let body = document.querySelector('body');
// Попап
let popupLink;
let isExtensionActive = false;
// табы
let tabsHead;
// табы контент
let tabsBody;

let contentTable;

// Btn копировать ссылки
let btnCopyLinks;

// Btn копировать текст ссылок
let btnCopyText;

// кнопка сохранения настроек
let btnSave;

//  инпут для клавиш вызова
let inputKeys;


// кнопка "удалить данные"
let buttonDelite;

// флаг
let inputAddLink;

// флаг
let inputSaveData;

// флаг
let inputAppClose;

let result = [];
let linksList ='';
let textList ='';

let newPopupWidth = 0;


// попап
popupLink = document.createElement('div');
popupLink.className='popupLink';
body.append(popupLink);

tabsHead = document.createElement('div');
tabsHead.className='tabsHead';
popupLink.prepend(tabsHead);


// buil tabs - head

let firstTabs = document.createElement('div');
firstTabs.className='tabsHead__title tabsHead__title_first is-active';
firstTabs.innerHTML = 'Данные';
tabsHead.prepend(firstTabs);

let lastTabs = document.createElement('div');
lastTabs.className='tabsHead__title tabsHead__title_last';
lastTabs.innerHTML = 'Настройки';
tabsHead.append(lastTabs);

// buil tabs - body

tabsBody = document.createElement('div');
tabsBody.className='tabsBody';
popupLink.append(tabsBody);

let firstTabsContent = document.createElement('div');
firstTabsContent.className='tabsBody__content tabsBody__content_first is-active';
tabsBody.prepend(firstTabsContent);

let lastTabsContent = document.createElement('div');
lastTabsContent.className='tabsBody__content tabsBody__content_last';
tabsBody.append(lastTabsContent);


// div внутри которого табл
let wrapContentTable = document.createElement('div');
wrapContentTable.className='wrapContentTable';
firstTabsContent.prepend(wrapContentTable);


// див для кнопок копирования
let copyBtns = document.createElement('div');
copyBtns.className='copyBtns';
firstTabsContent.append(copyBtns);


// build table
contentTable = document.createElement('table');
contentTable.className='contentTable';
wrapContentTable.append(contentTable);



//полоса тянуть табл влево
let stripPullLeft = document.createElement('div');
stripPullLeft.className='stripPullLeft';
popupLink.prepend(stripPullLeft);



// кнопки для копирования
btnCopyLinks = document.createElement('button');
btnCopyText = document.createElement('button');
copyBtns.prepend(btnCopyLinks);
copyBtns.append(btnCopyText);
btnCopyLinks.innerHTML = 'Копировать ссылки';
btnCopyLinks.className='btnCopyLinks';
btnCopyText.innerHTML = 'Копировать текст ссылок';
btnCopyText.className='btnCopyText';


// внутри второй вкладки таб боди
let wrapSettings = document.createElement('div');
wrapSettings.className='wrapSettings';
lastTabsContent.append(wrapSettings);

let contentSettings = document.createElement('div');
contentSettings.className='contentSettings';
wrapSettings.prepend(contentSettings);

// див настройки
let wrapBtnSave = document.createElement('div');
wrapBtnSave.className='wrapBtnSave';
wrapSettings.append(wrapBtnSave);


//btn сохранить настройки
btnSave = document.createElement('button');
btnSave.className='btnSave';
btnSave.innerHTML='Сохранить';
wrapBtnSave.append(btnSave);


// 4 дива
let wrapInputKeys = document.createElement('div');
wrapInputKeys.className='wrapInputKeys';
contentSettings.append(wrapInputKeys);

let garbage = document.createElement('div');
garbage.className='garbage';
contentSettings.append(garbage);

let linksDiv = document.createElement('div');
contentSettings.append(linksDiv);

let saveDiv = document.createElement('div');
contentSettings.append(saveDiv);
saveDiv.className='wrapSaveData';

let closeAppDiv = document.createElement('div');
contentSettings.append(closeAppDiv);
closeAppDiv.className='closeAppDiv';

// инпут + label изменение клавиш (1 див)
let labelKeys = document.createElement('label');
labelKeys.className='labelKeys';
labelKeys.innerHTML='Клавиши вызова';
labelKeys.setAttribute('for', 'edit');
wrapInputKeys.prepend(labelKeys);


inputKeys = document.createElement('input');
inputKeys.setAttribute('type', 'text');
inputKeys.setAttribute('id', 'edit');
inputKeys.setAttribute('maxlength', '25');
inputKeys.setAttribute('placeholder', 'Ctrl+q');
inputKeys.setAttribute('autocomplete', 'off');
inputKeys.className='inputKeys';
wrapInputKeys.append(inputKeys);


// img + btn удалить данные (2 див)
let garbageImg = document.createElement('img');
garbageImg.className='garbageImg';
garbageImg.setAttribute('src', 'data:image/png;base64,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');

garbageImg.setAttribute('alt', 'garbage');
garbage.prepend(garbageImg);

buttonDelite = document.createElement('button');
buttonDelite.className='buttonDelite';
buttonDelite.innerHTML='Удалить данные';
garbage.append(buttonDelite);


// флаг add ссылки (3 див)
inputAddLink = document.createElement('input');
inputAddLink.setAttribute('type', 'checkbox');
inputAddLink.setAttribute('id', 'addLink');
inputAddLink.className='inputAddLink';
linksDiv.prepend(inputAddLink);

let labelAddLink = document.createElement('label');
labelAddLink.className='labelAddLink';
labelAddLink.setAttribute('for', 'addLink');
labelAddLink.innerHTML='Добавлять только уникальные ссылки';
linksDiv.append(labelAddLink);

// флаг save data (4 див)
inputSaveData = document.createElement('input');
inputSaveData.setAttribute('type', 'checkbox');
inputSaveData.setAttribute('id', 'saveData');
inputSaveData.className='inputSaveData';
saveDiv.prepend(inputSaveData);

let labelSaveData = document.createElement('label');
labelSaveData.className='labelSaveData';
labelSaveData.setAttribute('for', 'saveData');
labelSaveData.innerHTML='Сохранять данные между запусками';
saveDiv.append(labelSaveData);


// флаг закр прилож
inputAppClose = document.createElement('input');
inputAppClose.setAttribute('type', 'checkbox');
inputAppClose.setAttribute('id', 'аppClose');
inputAppClose.className='inputAppClose';
closeAppDiv.prepend(inputAppClose);

let labelAppClose = document.createElement('label');
labelAppClose.className='labelAppClose';
labelAppClose.setAttribute('for', 'аppClose');
labelAppClose.innerHTML='Автоматически закрывать приложение';
closeAppDiv.append(labelAppClose);



// переключатель темы dark/light
let switchBtn = document.createElement('div');
switchBtn.className='switchBtn';
contentSettings.append(switchBtn);




// ВЫЗОВ ПРИЛОЖЕНИЯ****

// получение данных из стор
function getData(cb = () => {}) {
    chrome.storage.sync.get(['result'], function(data) {
        cb(data.result);
    });
    chrome.storage.sync.get(['widthPopup'], function(resultWidth){
        if (resultWidth.widthPopup){
            let savedPopupWidth = JSON.stringify(resultWidth.widthPopup);
            popupLink.style.width = savedPopupWidth + "px";
        }
    });
}


getData((data) => {
    renderResult(data);
});


function openApp(){
    isExtensionActive = true;
    areaSelection();
    // btnOpen.innerText = 'Закрыть приложение';
}


document.addEventListener('keydown', function(event){

    if (event.ctrlKey && event.code === 'KeyQ' && event.key === 'q'){  // только на отображение
        if(!isExtensionActive){
            // isExtensionActive = true;
            // areaSelection();
            openApp();
        } else {
            // isExtensionActive = false;
            disableAreaSelection();
        }

    }
});





/////////////////////////////////////
// let maybeWrap = document.querySelector('.maybe');
function callApp() {
    let btnOpen = document.querySelector('.btnOpen');
    // let textClose = btnOpen.innerText = "Закрыть приложение";
    // let textOpen = btnOpen.innerText = "Открыть приложение";
    if (btnOpen) {

        btnOpen.addEventListener('click', async (e) => {
            await chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {

                if (!isExtensionActive){
                    chrome.scripting.executeScript({
                        // files: ['catchError.js'],
                        target: {
                            tabId: tabs[0].id,
                            // allFrames: true
                        },
                        func: openApp,
                        // args: [null],
                    }
                    // (injectionResults) => {
                    //     for (const frameResult of injectionResults)
                    //         console.log('Frame Title: ' + frameResult.result);
                    // }

                    )
                    // alert(isExtensionActive)
                }
                // else if(isExtensionActive) {
                //     alert(isExtensionActive)
                //     // chrome.scripting.executeScript({
                //     //     target: {
                //     //         tabId: tabs[0].id,
                //     //     },
                //     //     func: disableAreaSelection,
                //     //     // args: [null],
                //     // })
                //     // chrome.scripting.unregisterContentScripts({
                //     //         // files: ['catchError.js'],
                //     //         target: {
                //     //             tabId: tabs[0].id,
                //     //             // allFrames: true
                //     //         },
                //     //         // func: disableAreaSelection,
                //     //         // args: [null],
                //     //     }
                //
                //     // )
                // }

            });
            window.close();

        })

    }

}
callApp();



// если пользователь покидает страницу, то закрывать приложение
window.onblur = function() {
    if (inputAppClose.checked) {
        isExtensionActive = false;
        disableAreaSelection();
    }
};



// ОТКЛЮЧЕНИЕ ВЫДЕЛЕНИЯ ЗОНЫ МЫШЬЮ****
function disableAreaSelection(){
    isExtensionActive = false;
    popupLink.classList.remove('activeShow');
    selectAreaEl.remove();
    document.addEventListener("mousedown", () => {
    });
}




// Переключение вкладок
document.querySelectorAll('.popupLink').forEach(function (tabEl) {

    let tabsHead = tabEl.querySelector('.tabsHead');
    let tabHeadList = tabEl.querySelectorAll('.tabsHead__title');
    let tabContentList = tabEl.querySelectorAll('.tabsBody__content');

    tabHeadList.forEach((tabHeadListEl, indexHead) =>{
        tabsHead.addEventListener('click', (e)=>{
            tabHeadList[indexHead].classList.remove('is-active');
            if (tabHeadList[indexHead] === e.target) {
                tabHeadList[indexHead].classList.add('is-active');

                tabContentList.forEach((tabContentListEl, indexContent) =>{
                    tabContentList[indexContent].classList.remove('is-active');

                    if (indexHead === indexContent) {
                        tabContentList[indexContent].classList.add('is-active');
                    }
                })
            }
        })
    })
})

// остановить скролл страницы
function toggleScroll(){
    let widthScrollBar = window.innerWidth - document.documentElement.clientWidth;

//если курсор находится над popupom
    popupLink.addEventListener("mouseover", () => {
        document.body.style.marginRight = widthScrollBar + 'px';
        document.body.style.setProperty('overflow', 'hidden', 'important');
        document.documentElement.style.setProperty('overflow', 'initial', 'important');
        popupLink.style.right = widthScrollBar + 'px';

    })

//если курсор ушел с popup
    popupLink.addEventListener('mouseout', () => {
        popupLink.style.right = '0';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0';
        document.documentElement.style.overflow = '';
    })
}
toggleScroll();


///////////////////////////////////////////////////////////////////////////////////////////////////////////



let selectAreaEl = document.createElement('div');
// ВЫДЕЛЕНИЕ ОБЛАСТИ МЫШЬЮ


function areaSelection() {

    popupLink.classList.add('activeShow');
    document.body.append(selectAreaEl);
    selectAreaEl.style.position = "absolute";
    selectAreaEl.style.background = "blue";
    selectAreaEl.style.opacity = "0.2";
    selectAreaEl.style.zIndex = "1000000000";


    let selectAreaEnable = false;
    let selectAreaActivator = false;

    let selectAreaTop = null;
    let selectAreaLeft = null;

    // let selectAreaBottom = null;
    // let selectAreaRight = null;

    let x1, x2, y1, y2;



    //кн. нажата
    document.addEventListener("mousedown", (e) => {
        // e.target === stripPullBottom || e.target === pointPullDiagonally

        if (!isExtensionActive || e.target === stripPullLeft) return


        e.preventDefault();

        selectAreaEnable = true;
        selectAreaActivator = false;

        selectAreaTop = e.pageY; //вниз
        selectAreaLeft = e.pageX;  // вправо


    }, false);




    //кн. отжата
    document.addEventListener("mouseup", (e) => {

        selectAreaEnable = false;

        // if (selectAreaActivator && (e.target !== wrapContentTable && e.target !== btnCopyLinks && e.target !== btnCopyText)) {
        if (selectAreaActivator){
            getTags();
        }



    }, false);

    popupLink.addEventListener("mouseup", (e) => {
        selectAreaActivator = false;
    }, false);

    // перемещение мыши
    document.addEventListener("mousemove", (e) => {



        selectAreaActivator = true;

        if (!selectAreaEnable) {
            selectAreaEl.style.display = 'none';
            return;
        }

        selectAreaEl.style.display = 'block';
        selectAreaEl.style.top = selectAreaTop + 'px';  // вниз
        selectAreaEl.style.left = selectAreaLeft + 'px'; // вправо
        selectAreaEl.style.height = e.pageY - selectAreaTop + 'px';
        selectAreaEl.style.width = e.pageX - selectAreaLeft + 'px';

        y1 = selectAreaTop;  //начальная
        y2 = e.pageY;  // движение
        x1 = selectAreaLeft; //нач
        x2 = e.pageX; //движ

          // window.scrollBy({
          //       // left: selectAreaLeft,
          //       top: selectAreaTop + e.pageY,
          //       behavior: 'smooth'
          //   }
          // );
        // window.scrollBy(e.pageX - selectAreaLeft, e.pageY - selectAreaTop);

        if (selectAreaTop > e.pageY) {   //y
            selectAreaEl.style.top = e.pageY + 'px';  // вниз
            selectAreaEl.style.height = selectAreaTop - e.pageY + 'px';
            y1 = e.pageY; // движ
            y2 = selectAreaTop; // статич

        }

        if (selectAreaLeft > e.pageX) {  //x
            selectAreaEl.style.left = e.pageX + 'px'; // вправо
            selectAreaEl.style.width = selectAreaLeft - e.pageX + 'px';
            x1 = e.pageX;  // движ
            x2 = selectAreaLeft; // статич

            // window.scrollBy(e.pageX, selectAreaTop);

        }

    });


    // ПОЛУЧЕНИЕ ССЫЛОК И ТЕКСТА**** (NEW)
    let result = [];
    linksList = '';
    textList = '';



    function getTags() {

        contentTable.innerHTML = '';

        let tags = [...document.querySelectorAll("a")];


        tags.forEach(tagEl => {

            let coordinataEl = tagEl.getBoundingClientRect();

            // верх. лев. угол элемент
            // let ely1 = coordinataEl.top + window.pageYOffset;
            // let elx1 = coordinataEl.left + window.pageXOffset;

            let ely1 = coordinataEl.top + window.scrollY;
            let elx1 = coordinataEl.left + window.scrollX;

            // ниж. прав. угол элемент
            let ely2 = ely1 + tagEl.clientHeight;
            let elx2 = elx1 + tagEl.clientWidth;


            let exclude = false;

            // проверка по y координате
            if (!(y2 >= ely1 && ely1 >= y1 && y2 >= ely2 && ely2 >= y1)) exclude = true;

            // проверка по x координате
            if (!(x2 >= elx1 && elx1 >= x1 && x2 >= elx2 && elx2 >= x1)) exclude = true;



            if (!exclude && tagEl.getAttribute('href')) {

                let url = tagEl.getAttribute('href');
                // url = url.replace("https://", '');
                // url = url.replace("http://", '');

                let text = tagEl.innerText;
                let isDouble = false;


                // Только уникальные. Проверка на флаг выключен
                if (!inputAddLink.checked) {
                    result.push({
                        url: url,
                        text: text
                    })
                }

                // только уникальные проверка на флаг включен
                if (inputAddLink.checked) {
                    // let isDouble = false;
                    // покрасить полученное
                    tagEl.style.background = 'rgb(100, 149, 237)';
                    document.addEventListener('mouseup', ()=>{
                        tagEl.style.background = '';
                    })
                    isDouble = result.find(object => object.url === url);
                    // if(!(result.find(object => object.url === url))){

                    if (!isDouble) {
                        result.push({
                            // url: tagEl.getAttribute('href').replace('https://', '').replace('http://', ''),
                            url: tagEl.getAttribute('href'),
                            text: tagEl.innerText
                        })
                    }
                }

            }

        });


        linksList = '';
        textList = '';

        saveData(result);
        renderResult(result);

    }



    function saveData(data) {
        chrome.storage.sync.set({result: data});
    }




    // Удалить данные
    buttonDelite.addEventListener('click', () => {
        contentTable.innerHTML = '';
        result = [];
        saveData([]);
        navigator.clipboard.writeText('');
    });


}


let trTable;
function renderResult(result) {

    linksList = '';
    textList = '';


    // let totalLinks = 0;
    result.forEach((resultEl, index) => {
        // totalLinks = result.length - 1;
        // console.log(totalLinks + 1)
        let titleLink =
        `
          <td class="tdTable" title="${index + 1}">${index + 1}</td>
          <td class="tdTable titleUrl" title="${resultEl.url}">${resultEl.url}</td>
          <td class="tdTable titleText" title="${resultEl.text}">${resultEl.text}</td>
        `;

        trTable = document.createElement('tr');
        trTable.innerHTML = titleLink;
        trTable.className = 'trTable';
        contentTable.append(trTable);


        linksList += `${resultEl.url}\n`;
        textList += `${resultEl.text}\n`;



        // получить список ссылок  (NEW)
        // btnCopyLinks.addEventListener('click', () =>{
        //     navigator.clipboard.writeText(linksList)
        //         .then(() => {
        //             console.log(linksList)
        //         })
        //         .catch(err => {
        //             // alert('error in GetLinks', err);
        //             console.log('нет')
        //         });
        //     });
        /////////////////////////////////////////////////////////////////////////////////
        // получить список названий  (NEW)
        // btnCopyText.addEventListener('click', () =>{
        //     navigator.clipboard.writeText(textList)
        //         .then(() => {
        //         })
        //         .catch(err => {
        //             alert('error in GetLinks', err);
        //         });
        // });

    });

}


// подтверждение, что скопировано
function showCopyingStatus(){
   let copyingPopup = document.createElement('div');
    copyingPopup.className = 'copyingPopup';
    copyingPopup.innerText = 'Скопировано';
    firstTabsContent.prepend(copyingPopup);
    setTimeout(function(){
        copyingPopup.style.opacity = '0';
        copyingPopup.style.transition = 'opacity .9s';
    }, 400);
    setTimeout( function (){
        copyingPopup.remove();
    }, 1000);
}





// ДВОЙНОЙ КЛИК ПО ЭЛЕМЕНТУ - КОПИРОВАНИЕ**** (NEW)
contentTable.addEventListener('dblclick', (event)=>{
    let elemText = event.target;
    if (elemText.classList.contains('tdTable')) {
        // elemText.style.color='#2196f3';
    // if (elemText) {
        navigator.clipboard.writeText(elemText.innerHTML)
            .then(() => {

            })
            .catch(err => {
                alert('error in GetLinks', err);
            });
    }
    showCopyingStatus();
});



// получить список названий  (NEW)
btnCopyText.addEventListener('click', () =>{
    let titleText = document.querySelectorAll('.titleText');
    addInnerText(titleText);
        showCopyingStatus();
});


// получить список ссылок  (NEW)
btnCopyLinks.addEventListener('click', () =>{
    let titleUrl = document.querySelectorAll('.titleUrl');
    addInnerText(titleUrl);
        showCopyingStatus();
});



function addInnerText(list){
    let resultList = '';
    list.forEach(listEl =>{
        resultList += listEl.innerHTML + '\n';

        navigator.clipboard.writeText(resultList)
            .then(() => {
               // копирование прошло успешно

            })
            .catch(err => {
                alert('error in GetLinks', err);
            });
    })
}







// переключать темы
switchBtn.addEventListener('click', ()=>{
    switchBtn.classList.toggle('switchOn');
    popupLink.classList.toggle('lightTheme');
})



/////////////////////////////////////////////////////////////////////////////////////

//СОХРАНЕНИЕ ЧЕКБОКСОВ в CHROME STORAGE
function memoryCheckLink(){

    btnSave.addEventListener('click', ()=>{
        if(inputAddLink.checked){
            chrome.storage.sync.set({linkCheckStatus: "true"});
        }
        else {
            chrome.storage.sync.set({linkCheckStatus: "false"});
        }
    });

    chrome.storage.sync.get(['linkCheckStatus'], function(result1){
        if (result1.linkCheckStatus === "true"){
            inputAddLink.setAttribute('checked','checked');

        }
    });
}
memoryCheckLink();



// данные между запусками
function memoryCheckData(){

    btnSave.addEventListener('click', ()=>{
        if(inputSaveData.checked){
            chrome.storage.sync.set({dataCheckStatus: "true"});
        }
        else {
            chrome.storage.sync.set({dataCheckStatus: "false"});
        }
    });

    chrome.storage.sync.get(['dataCheckStatus'], function(result2){
        if (result2.dataCheckStatus === "true"){
            inputSaveData.setAttribute('checked','checked');
        }
    });
}
memoryCheckData();

// флаг закрыть приложение
function memoryCheckCloseApp(){

    btnSave.addEventListener('click', ()=>{
        if(inputAppClose.checked){
            chrome.storage.sync.set({closeAppCheckStatus: "true"});
        }
        else {
            chrome.storage.sync.set({closeAppCheckStatus: "false"});
        }
    });

    chrome.storage.sync.get(['closeAppCheckStatus'], function(result3){
        if (result3.closeAppCheckStatus === "true"){
            inputAppClose.setAttribute('checked','checked');

        }
    });
}
memoryCheckCloseApp();



function onMouseMove(event) {
    let docWidth = document.documentElement.clientWidth;  // ширина документа
    let docRightWight = docWidth - event.pageX; // расстояние от правого края
        popupLink.style.width = docRightWight + 'px'; // новая ширина
        newPopupWidth = docRightWight;
}


// изменять ширину попапа
stripPullLeft.onmousedown = function(event) {
    event.preventDefault();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    onMouseMove(event);

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

    stripPullLeft.addEventListener('mouseup', ()=>{
        chrome.storage.sync.set({widthPopup: newPopupWidth});
    })
    stripPullLeft.ondragstart = function() {
        return false;
    };
};


function memoryTheme(){

    switchBtn.addEventListener('click', ()=>{

        if(switchBtn.classList.contains('switchOn')){
            chrome.storage.sync.set({switchBtnStatus: "true"});
        }
        else {
            chrome.storage.sync.set({switchBtnStatus: "false"});
        }
    });

    chrome.storage.sync.get(['switchBtnStatus'], function(resultSwitchBtn){
        if (resultSwitchBtn.switchBtnStatus === "true"){
            switchBtn.classList.add('switchOn');
            popupLink.classList.toggle('lightTheme');

        }
    });
}
memoryTheme();














