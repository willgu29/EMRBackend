<template>
  <span class="field-tip">
    {{text}}
    <span class="tip-content">{{this.hoverText}}</span>
  </span>
</template>

<style>
.img-circle {
  width: 20px;
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 10px;
  margin-bottom: 4px;
}
/* Hover tooltips */
.field-tip {
    position:relative;
    cursor:help;
}
    .field-tip .tip-content {
        position:absolute;
        top:-30px; /* - top padding */
        right:9999px;
        width:200px;
        margin-right:-180px; /* width + left/right padding */
        padding:10px;
        color:#fff;
        background:#333;
        -webkit-box-shadow:2px 2px 5px #aaa;
           -moz-box-shadow:2px 2px 5px #aaa;
                box-shadow:2px 2px 5px #aaa;
        opacity:0;
        -webkit-transition:opacity 250ms ease-out;
           -moz-transition:opacity 250ms ease-out;
            -ms-transition:opacity 250ms ease-out;
             -o-transition:opacity 250ms ease-out;
                transition:opacity 250ms ease-out;
    }
        /* <http://css-tricks.com/snippets/css/css-triangle/> */
        .field-tip .tip-content:before {
            content:' '; /* Must have content to display */
            position:absolute;
            top:50%;
            left:-16px; /* 2 x border width */
            width:0;
            height:0;
            margin-top:-8px; /* - border width */
            border:8px solid transparent;
            border-right-color:#333;
        }
        .field-tip:hover .tip-content {
            right:-20px;
            opacity:1;
        }
</style>

<script>
export default {
  name: 'fieldTip',
  props: ['text', 'toolTip'],
  data () {
    return {
      hoverText: this.toolTip || ''
    }
  }
}
</script>
