<template>
  <div id="he-plugin-standard"></div>
</template>

<script setup lang="ts">
window.WIDGET = {
  "CONFIG": {
    "layout": "2",
    "width": "220",
    "height": 270,
    "background": "5",
    "dataColor": "000000",
    "borderRadius": "15",
    "key": "de9b548ecee043cdb9075a4b750ebf44"
  }
}
{
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
  document.getElementsByTagName('head')[0].appendChild(script);
}

</script>

<style scoped lang="less">
</style>