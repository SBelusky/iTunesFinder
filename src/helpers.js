/* moj vlastný vue plugin - bude vypisovať na kozolu po zavolaní me´tody $log*/

const MyHelper = {
    install(Vue) {
        Vue.prototype.$log = function(data) {
            console.log(data);
        };
    }
};

export default MyHelper;
