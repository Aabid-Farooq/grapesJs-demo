export const FEATURED_POSTS = {
  id: "posts",
  label: "Featured Posts",
  media: `<div style="display: flex; align-items: center; justify-content: center"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" fill="#ffffff" />
  </svg></div>`,
  content: `<div data-gjs-type="text"><div style="display: flex; flex-flow: wrap; width: 100%; justify-content: space-around; padding: 20px; box-sizing: border-box;">
  <div style="border: 1px solid #ccc; border-radius: 10px; padding: 20px; margin: 20px; width: 20rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
      <h3 style="margin-top: 0;">Title</h3>
      <p>Description</p>
  </div>
  <div style="border: 1px solid #ccc; border-radius: 10px; padding: 20px; margin: 20px; width: 20rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
      <h3 style="margin-top: 0;">Title</h3>
      <p>Description</p>
  </div>
  <div style="border: 1px solid #ccc; border-radius: 10px; padding: 20px; margin: 20px; width: 20rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
      <h3 style="margin-top: 0;">Title</h3>
      <p>Description</p>
  </div>
  <div style="border: 1px solid #ccc; border-radius: 10px; padding: 20px; margin: 20px; width: 20rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
      <h3 style="margin-top: 0;">Title</h3>
      <p>Description</p>
  </div>
</div></div>`,
  category: "Custom Components",
};

export const PRODUCT_CARDS = {
  id: "cards",
  label: "Product Cards",
  media: `<div style="display: flex; align-items: center; justify-content: center"><svg style="width:24px;height:24px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12.6099H19" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19 10.2798V17.4298C18.97 20.2798 18.19 20.9998 15.22 20.9998H5.78003C2.76003 20.9998 2 20.2498 2 17.2698V10.2798C2 7.5798 2.63 6.70981 5 6.56981C5.24 6.55981 5.50003 6.5498 5.78003 6.5498H15.22C18.24 6.5498 19 7.2998 19 10.2798Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M5.25 17.8101H6.96997" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M9.10938 17.8101H12.5494" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></div>`,
  // You can pass components as a JSON instead of a simple HTML string,
  content: `<div data-gjs-type="text"><div style="display: flex; flex-flow: wrap; width: 100%; justify-content: space-around; padding: 20px; box-sizing: border-box;">
      <div style="border: 1px solid #ccc; border-radius: 10px; padding: 20px; margin: 20px; width: 20rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
          <img src="https://via.placeholder.com/150" alt="Product" style="width: 100%; height: auto; border-radius: 10px;">
          <h3 style="margin-top: 10px;">Product</h3>
          <p style="color: #28a745; font-size: 1.2em; margin: 10px 0;">$19.99</p>
          <p>description</p>
      </div>
      <div style="border: 1px solid #ccc; border-radius: 10px; padding: 20px; margin: 20px; width: 20rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
          <img src="https://via.placeholder.com/150" alt="Product" style="width: 100%; height: auto; border-radius: 10px;">
          <h3 style="margin-top: 10px;">Product</h3>
          <p style="color: #28a745; font-size: 1.2em; margin: 10px 0;">$29.99</p>
          <p>description</p>
      </div>
      <div style="border: 1px solid #ccc; border-radius: 10px; padding: 20px; margin: 20px; width: 20rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
          <img src="https://via.placeholder.com/150" alt="Product" style="width: 100%; height: auto; border-radius: 10px;">
          <h3 style="margin-top: 10px;">Product</h3>
          <p style="color: #28a745; font-size: 1.2em; margin: 10px 0;">$39.99</p>
          <p>description</p>
      </div>
      <div style="border: 1px solid #ccc; border-radius: 10px; padding: 20px; margin: 20px; width: 20rem; box-shadow: 0 4px 8px rgba(0,0,0,0.1); text-align: center;">
          <img src="https://via.placeholder.com/150" alt="Product" style="width: 100%; height: auto; border-radius: 10px;">
          <h3 style="margin-top: 10px;">Product</h3>
          <p style="color: #28a745; font-size: 1.2em; margin: 10px 0;">$49.99</p>
          <p>description</p>
      </div>
  </div></div>`,
  category: "Custom Components",
};

export const HOMEPAGE = {
    name: "Home page",
    component: `<div class="panel" style="width: 100%; border-radius: 3px; padding: 30px 20px; margin: 0px auto 0px; background-color: #d983a6; box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25); color: rgba(255, 255, 255, 0.75); font: caption; font-weight: 100;">
    <h1 class="welcome" style="text-align: center; font-weight: 100; margin: 0px;">Welcome to</h1>
    <div class="big-title" style="text-align: center; font-size: 3.5rem;">
      <svg class="logo" viewBox="0 0 100 100" style="width: 70px; height: 70px; vertical-align: middle;">
        <path d="M40 5l-12.9 7.4 -12.9 7.4c-1.4 0.8-2.7 2.3-3.7 3.9 -0.9 1.6-1.5 3.5-1.5 5.1v14.9 14.9c0 1.7 0.6 3.5 1.5 5.1 0.9 1.6 2.2 3.1 3.7 3.9l12.9 7.4 12.9 7.4c1.4 0.8 3.3 1.2 5.2 1.2 1.9 0 3.8-0.4 5.2-1.2l12.9-7.4 12.9-7.4c1.4-0.8 2.7-2.2 3.7-3.9 0.9-1.6 1.5-3.5 1.5-5.1v-14.9 -12.7c0-4.6-3.8-6-6.8-4.2l-28 16.2" style="pointer-events: none; fill: none; stroke-linecap: round; stroke-width: 7; stroke: #fff;" />
      </svg>
      <span>GrapesJS</span>
    </div>
    <div class="description" style="text-align: center; font-size: 1rem; line-height: 1.5rem;">
      This is a demo project created to test out GrapesJs and its integration with React. The demo has been prepared by Aabid Bin Farooq in response to the task assigned to him at Applied Informatics Srinagar
    </div>
  </div>`,
  }
