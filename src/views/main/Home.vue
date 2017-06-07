<template>
    <div>
        <ol>
            <li>2:00</li>
            <li>1:30</li>
            <li>1:30</li>
            <li>1:30</li>
            <li>1:30</li>
            <li>1:30</li>
            <li>1:30</li>
            <li>1:30</li>
        </ol>
    </div>
</template>
<script>
    export default {
        name: 'MainHome',
        created () {
            this.$lodash.each([1, 2, 3, 4, 5, 6, 7, 8, 9], item => {
                console.log(item)
            })
        }
    }
</script>
