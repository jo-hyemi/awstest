const avologo = document.querySelector('.header-logo');
console.log('hello aws');

// footer vue
const FooterItem = {
  template: `
  <footer class="st-footer">
  <h2 class="footer-head">About Company</h2>
  <div class="footer-txtwrap">
    <p class="footer-name">株式会社KUKAN</p>
    <ul class="footer-info">
      <li class="footer-info__item">ADDRESS | Tokyo katsushika-ku kosuge 0-0-0 come to my house </li>
      <li class="footer-info__item">CEO | TANAKA TARO</li>
      <li class="footer-info__item">TEL | 010-0000-0000</li>
    </ul>
  </div>
  <img src="./img/avo-logo.png" alt="avocado's logo" class="footer-logo">
</footer>
  `
}
const appFooter = Vue.createApp({
  components: {
    FooterItem
  }
})
appFooter.mount('#js-footer')

