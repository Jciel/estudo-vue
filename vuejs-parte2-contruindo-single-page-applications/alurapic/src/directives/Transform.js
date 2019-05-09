import Vue from 'vue';


Vue.directive('meu-transform', {
    bind(el, binding, vnode) {

        let current = 0;

        el.addEventListener('dblclick', function () {

            let incremento = 90;
            let animate = false;


            if (binding.value) {
                incremento = binding.value.incremento;
                animate = binding.value.animate;
            }

            current += incremento;

            if (animate) {
                this.style.transition = 'transform 0.5s';
            }

            this.style.transform = `rotate(${current}deg)`;

            console.log("teste")
        });

    }
});
