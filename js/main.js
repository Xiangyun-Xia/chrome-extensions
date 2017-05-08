//获取内存使用量
function getMemUsage(callback) {
    //chrome浏览器提供的读取页面内存的方法
    chrome.system.memory.getInfo(function (info) {
        callback(info);
    });
}
//更新及显示内存使用量
function updateMemUsage(el) {
    getMemUsage(function (usage) {
        //已经使用的
        console.log(usage.capacity - usage.availableCapacity);
        //总的
        console.log(usage.capacity);
        //百分比
        var percent = Math.round((usage.capacity - usage.availableCapacity) / usage.capacity * 100);
        el.innerHTML="当前内存使用率为"+percent+"%";
    });
    setTimeout(function () {
        updateMemUsage(el);
    }, 1000);
}
var men_div = document.getElementById('men_div');
updateMemUsage(men_div);
