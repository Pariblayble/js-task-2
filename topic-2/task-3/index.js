/**
 * Задача 3
 * В этой задаче вам необходимо дописать функцию,
 * которая проверяет группу на корректность
 * Функция принимает на вход строку содержащую символы (), {} или []
 * Должна вернуть True, если строка пустая или группа корректна
 * Или False, если группа неправильная
 * Правильная строка не может закрыть группу в неправильном порядке,
 * открыть группу, но не закрыть ее, или закрыть группу до ее открытия. 
 * 
 * Примеры корректных групп:
 * ([{}]), (), [], {}, {()}
 * Примеры некорректных:
 * )(), {(}), ([], [])
 * 
 * @param {*} group 
 */
function isGroup(group) {
    if (typeof group !== typeof "строка"){
        throw Error('Мне из 8 существующих типов надо только строку, остальное я не ем, фу');
    }
    if (group.length === 0){
        return true;
    }
    for(let i = 0; i < group.length; i++){
        // Я знаю, что код повторяется, не красиво, а как сделать красиво?
        switch(group[i]){
        case "{":
            if (group[group.length - i - 1] !== "}"){
                return false;
            }
            break;
        case "[":
            if (group[group.length - i - 1] !== "]"){
                return false;
            }
            break;
        case "(":
            if (group[group.length - i - 1] !== ")"){
                return false;
            }
            break;
        }
    }

    return true;
}

module.exports.isGroup = isGroup;