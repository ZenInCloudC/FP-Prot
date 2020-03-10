

describe('Enter login feature',function(){
    browser.waitForAngularEnabled(false);

    browser.driver.manage().window().maximize();
 
 
 
 it('It should name as freshpro',function(){
   //zenincloud@gmail.com
 //ZenInCloud@123
     browser.get('http://beta1.freshproposals.com/');
     browser.driver.findElement(by.name('textbox_0')).sendKeys('nikeeta3011@gmail.com');
     browser.driver.findElement(by.name('textbox_1')).sendKeys('Nikeeta@123');
    var abc = browser.driver.findElement(by.xpath("//b[contains(text(),'Sign In')]"));
    abc .click();
    browser.sleep('15000');
 });
 
 });
 describe('Create section',function(){
   it('new section',function(){
     browser.driver.findElement(by.xpath("//li[@class='content-library']")).click();
     //browser.sleep('10000');
     //browser.driver.get('http://beta1.freshproposals.com/home/sections');
     browser.sleep('5000');
 
     browser.driver.findElement(by.xpath("//div[@class='create-prop-temp-box']//img")).click();
     browser.sleep('1000');
 
     browser.driver.findElement(by.name("name")).sendKeys("Protractor Section");
     browser.sleep('1000');
 
    browser.driver.findElement(by.xpath("//button[@class='btn save-btn float-right']")).click();
     browser.sleep('3000');
    dragandDropTextbox();
   // Add NeW Page
  //  var AddPage =browser.findElement(by.xpath("//i[@class='fa fa-plus-circle']"));
  //  AddPage.click();
  // browser.executeScript("window.scrollTo(0, document.body.scrollHeight)");

  //  dragAndDropFeesTable();
  //   AddPage.click();
  // browser.executeScript("window.scrollTo(0, document.body.scrollHeight)");

  //   dragAndDropContentTable();


    browser.driver.findElement(by.xpath("//button[@class='nav-link btn send-btn']")).click();
    browser.sleep('3000');

     browser.driver.findElement(by.xpath("//button[contains(text(),'Back')]")).click();
     browser.sleep('3000');
     
   });
 
 });

 
 describe('Create template',function(){
 it ('Create template',function(){
       browser.driver.findElement(by.xpath("//li[@class='templates']")).click();
      browser.sleep('3000');
       browser.driver.findElement(by.className("create-prop-temp-box")).click();
       browser.sleep('3000');
       var ad=  browser.driver.findElement(by.xpath("//input[@formcontrolname='name']"));
      ad.sendKeys('Protractor-template');
       browser.sleep('3000');
       browser.driver.findElement(by.xpath("//button[@class='btn save-btn float-right']")).click();
       browser.sleep('4000');
       browser.driver.findElement(by.xpath("//button[@class='btn add-sect-btn template-add-sec ng-star-inserted']//i[@class='fa fa-plus-circle']")).click();
       browser.sleep('2000');
       var section =browser.driver.findElement(By.className('prop-temp-con-overlay'))
       browser.actions().mouseMove(section).perform();
       browser.sleep('2000');
       browser.driver.findElement(By.xpath("//a[@class='btn btn-outline-light use-this-icon']")).click();
       browser.sleep('2000');
      browser.findElement(by.xpath("//button[@class='btn add-sect-btn ng-star-inserted']")).click();
      browser.sleep('5000');

      browser.driver.findElement(by.name('name')).sendKeys('Protractor-proposal');
     browser.sleep('5000');
     browser.driver.findElement(by.xpath("//button[@class='btn save-btn float-right']")).click();
     browser.sleep('7000');
     browser.driver.findElement(by.id("chkContact298")).click();
     browser.sleep('3000');
     browser.driver.findElement(by.xpath("//button[@class='btn btn-outline-secondary calendar']//img")).click();
     browser.sleep('3000');
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();
     
     today = yyyy +'-'+ mm +'-'+ dd;
     console.log(today);
     var pickerDue = element(by.xpath("//input[@name='dueDate']")).sendKeys(today);
     browser.sleep('2000');
    
 browser.driver.findElement(By.xpath("//button[@class='btn send-btn mt-3']")).click();
 browser.sleep('5000');
var next= browser.findElement(by.xpath("//button[@class='nav-link btn next-btn ng-star-inserted']"));
browser.executeScript("arguments[0].click()",next);

 //browser.findElement("//button[@class='nav-link btn next-btn ng-star-inserted']").click();
 browser.sleep('7000');

 var emailtemp =browser.driver.findElement(By.xpath("//div[@id='NaN']//div[@class='card-body']"));
 browser.actions().mouseMove(emailtemp).perform();
 browser.sleep('2000');


browser.driver.findElement(By.xpath("//a[@class='btn btn-email-template-apply'][contains(text(),'Apply')]")).click();
browser.sleep('2000');
browser.driver.findElement(By.xpath("//a[@class='btn save-btn-wizard float-right']")).click();
browser.sleep('2000');


       browser.sleep('5000');
     //  browser.driver.findElement(by.xpath("//button[contains(text(),'Back')]")).click();
     //  browser.sleep('3000');
 });
 });
 describe('Create Proposal', function() {
   it("proposal creation and sending the proposal",function(){
     browser.driver.findElement(by.xpath("//li[@class='proposals is-active']")).click();
     browser.sleep('7000');
     browser.driver.findElement(by.className("create-prop-temp-box")).click();
     browser.sleep('3000');
     browser.driver.findElement(by.name('name')).sendKeys('Protractor-proposal');
     browser.sleep('5000');
     browser.driver.findElement(by.xpath("//button[@class='btn save-btn float-right']")).click();
     browser.sleep('7000');
     browser.driver.findElement(by.id("chkContact298")).click();
     browser.sleep('3000');
     browser.driver.findElement(by.xpath("//button[@class='btn btn-outline-secondary calendar']//img")).click();
     browser.sleep('3000');
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();
     
     today = yyyy +'-'+ mm +'-'+ dd;
     console.log(today);
     var pickerDue = element(by.xpath("//input[@name='dueDate']")).sendKeys(today);
     browser.sleep('2000');
    
 browser.driver.findElement(By.xpath("//button[@class='btn send-btn mt-3']")).click();
 browser.sleep('4000');
  browser.driver.findElement(by.className('btn add-sect-btn proposal-add-sec')).click();
 browser.sleep('4000');
 var section =browser.driver.findElement(By.className('prop-temp-con-overlay'))
      browser.actions().mouseMove(section).perform();
      browser.sleep('4000');
 browser.driver.findElement(By.xpath("//a[@class='btn btn-outline-light use-this-icon']")).click();
 browser.sleep('4000');
 //Add new section
 browser.driver.findElement(By.className("create-prop-temp-box")).click();
 browser.sleep('4000');
 browser.driver.findElement(by.xpath("//input[@formcontrolname='name']")).sendKeys("ADD SECTION");
 browser.sleep('5000')
 
     browser.driver.findElement(by.xpath("//button[@class='btn save-btn float-right']")).click();
 browser.sleep('2000')
     browser.driver.findElement(by.xpath("//div[@class='section-header']//img")).click();
 browser.sleep('2000')
 browser.driver.findElement(By.xpath("//button[@class='nav-link btn next-btn ng-star-inserted']")).click();
 browser.sleep('4000')
 var emailtemp =browser.driver.findElement(By.xpath("//div[@class='ng-star-inserted aos-init aos-animate']"));
      browser.actions().mouseMove(emailtemp).perform();
      browser.sleep('2000');
 
 
 browser.driver.findElement(By.xpath("//a[@class='btn btn-email-template-apply'][contains(text(),'Apply')]")).click();
 browser.sleep('2000')
 browser.driver.findElement(By.xpath("//a[@class='btn save-btn-wizard float-right']")).click();
 browser.sleep('2000')
 logout();
   });
   
 });

 function logout(){
  var profile=browser.driver.findElement(by.xpath("//li[@class='nav-item']//a[@id='navbarDropdownMenuLink']"));
  browser.executeScript("arguments[0].click()",profile);
  
  browser.sleep('2000')
  var logout=browser.driver.findElement(by.xpath("//h6[contains(text(),'Log Out')]"));
  browser.executeScript("arguments[0].click()",logout);
  
  browser.sleep('4000')
  
 };
 function dragandDropTextbox(){
 

//   try {
//     // browser.findElement(by.xpath("//button[@class='btn next-btn']")).click();
//     // browser.sleep('4000');
    //browser.driver.findElement(By.xpath("//button[@class='btn send-btn mt-3']")).click();
 //browser.sleep('5000');
//   }catch(e){
//     console.log('Error'+e)
// }
  

    browser.sleep('4000')
   var abc= browser.findElement(by.xpath("//img[@src='../../assets/navbar-hide-arrow-icon.png']"));
   browser.executeScript("arguments[0].click()",abc);
    browser.sleep('3000');   
    var e1 = element(by.id('Text'));
           var e2= element(by.xpath("//div[@class='default-rectangle']"));
           browser.sleep('1000');
          // browser.driver.findElement(by.xpath("//select[@class='form-control ng-untouched ng-pristine ng-valid']//option[9]")).click();
          browser.findElement(by.xpath("//option[9]")).click();
          browser.sleep('5000');
           const JS_HTML5_DND = 'function e(e,t,n,i){var r=a.createEvent("DragEvent");r.initMouseEvent(t,!0,!0,o,0,0,0,c,g,!1,!1,!1,!1,0,null),Object.defineProperty(r,"dataTransfer",{get:function(){return d}}),e.dispatchEvent(r),o.setTimeout(i,n)}var t=arguments[0],n=arguments[1],i=arguments[2]||0,r=arguments[3]||0;if(!t.draggable)throw new Error("Source element is not draggable.");var a=t.ownerDocument,o=a.defaultView,l=t.getBoundingClientRect(),u=n?n.getBoundingClientRect():l,c=l.left+(l.width>>1),g=l.top+(l.height>>1),s=u.left+(u.width>>1)+i,f=u.top+(u.height>>1)+r,d=Object.create(Object.prototype,{_items:{value:{}},effectAllowed:{value:"all",writable:!0},dropEffect:{value:"move",writable:!0},files:{get:function(){return this._items.Files}},types:{get:function(){return Object.keys(this._items)}},setData:{value:function(e,t){this._items[e]=t}},getData:{value:function(e){return this._items[e]}},clearData:{value:function(e){delete this._items[e]}},setDragImage:{value:function(e){}}});if(n=a.elementFromPoint(s,f),!n)throw new Error("The target element is not interactable and need to be scrolled into the view.");u=n.getBoundingClientRect(),e(t,"dragstart",101,function(){var i=n.getBoundingClientRect();c=i.left+s-u.left,g=i.top+f-u.top,e(n,"dragenter",1,function(){e(n,"dragover",101,function(){n=a.elementFromPoint(c,g),e(n,"drop",1,function(){e(t,"dragend",1,callback)})})})})';

         browser.driver.executeScript(JS_HTML5_DND, e1.getWebElement(), e2.getWebElement())
        
           browser.sleep('3000');
           browser.driver.findElement(by.xpath("//option[contains(text(),'100%')]")).click();
           browser.sleep('4000');
          // var closed=browser.driver.findElement(by.xpath("//div[@class='collapse-preview-controls']//img"));
          
          browser.executeScript("arguments[0].click()",abc);

  var textbox=browser.driver.findElement(by.xpath("//div[@class='fr-element fr-view']"));
     textbox.click();
     textbox.sendKeys("Sendkeys is not the method in javascript");
   //  browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').perform();
     browser.sleep('3000');

    browser. driver.findElement(By.xpath("//button[starts-with(@id,'bold')]")).click();
    browser.sleep('3000');
     browser.driver.findElement(By.xpath("//button[starts-with(@id,'underline')]")).click();
     browser.sleep('3000');

     browser.driver.findElement(By.xpath("//button[starts-with(@id,'paragraphStyle')]")).click();
     browser.sleep('3000');

		browser.driver.findElement(By.linkText("Heading 1")).click();
        browser.sleep('3000');
       var  textwidth= browser.findElement(by.xpath("//div[@class='row']//div[1]//div[1]//ejs-numerictextbox[1]//span[1]//input[1]"));
       textwidth.clear();

       browser.sleep('3000');
      textwidth.sendKeys('1000');
       browser.sleep('3000');
       var  textHeight= browser.findElement(by.xpath("//div[@id='config-panel-one']//div[2]//div[1]//ejs-numerictextbox[1]//span[1]//input[1]"));
       textHeight.clear();
       browser.sleep('3000');
       textHeight.sendKeys('700');

       browser.sleep('3000');
       var ClolrDropdoown =browser.findElement(by.xpath("//button[@class='e-icon-btn e-control e-dropdown-btn e-lib e-btn']"));
       ClolrDropdoown.click();
       browser.sleep('3000');
     var colorValue = browser.findElement(by.xpath("//input[@class='e-hex']"));
       colorValue.clear();
       colorValue.sendKeys("#892929");
       browser.sleep('3000');
       colorValue.click();
    var applyBtn= browser.findElement(by.xpath("//div[@class='e-ctrl-btn']//button[1]"));
    applyBtn.click();
    browser.sleep('3000'); 
  };

  function dragAndDropFeesTable(){
    var abc= browser.findElement(by.xpath("//img[@src='../../assets/navbar-hide-arrow-icon.png']"));
    browser.executeScript("arguments[0].click()",abc);
     browser.sleep('3000');   
     var e1 = element(by.id('Fees'));
            var e2= element(by.xpath("//div[@class='default-rectangle']"));
            browser.sleep('1000');
           // browser.driver.findElement(by.xpath("//select[@class='form-control ng-untouched ng-pristine ng-valid']//option[9]")).click();
           browser.findElement(by.xpath("//option[9]")).click();
           browser.sleep('5000');
            const JS_HTML5_DND = 'function e(e,t,n,i){var r=a.createEvent("DragEvent");r.initMouseEvent(t,!0,!0,o,0,0,0,c,g,!1,!1,!1,!1,0,null),Object.defineProperty(r,"dataTransfer",{get:function(){return d}}),e.dispatchEvent(r),o.setTimeout(i,n)}var t=arguments[0],n=arguments[1],i=arguments[2]||0,r=arguments[3]||0;if(!t.draggable)throw new Error("Source element is not draggable.");var a=t.ownerDocument,o=a.defaultView,l=t.getBoundingClientRect(),u=n?n.getBoundingClientRect():l,c=l.left+(l.width>>1),g=l.top+(l.height>>1),s=u.left+(u.width>>1)+i,f=u.top+(u.height>>1)+r,d=Object.create(Object.prototype,{_items:{value:{}},effectAllowed:{value:"all",writable:!0},dropEffect:{value:"move",writable:!0},files:{get:function(){return this._items.Files}},types:{get:function(){return Object.keys(this._items)}},setData:{value:function(e,t){this._items[e]=t}},getData:{value:function(e){return this._items[e]}},clearData:{value:function(e){delete this._items[e]}},setDragImage:{value:function(e){}}});if(n=a.elementFromPoint(s,f),!n)throw new Error("The target element is not interactable and need to be scrolled into the view.");u=n.getBoundingClientRect(),e(t,"dragstart",101,function(){var i=n.getBoundingClientRect();c=i.left+s-u.left,g=i.top+f-u.top,e(n,"dragenter",1,function(){e(n,"dragover",101,function(){n=a.elementFromPoint(c,g),e(n,"drop",1,function(){e(t,"dragend",1,callback)})})})})';
 
          browser.driver.executeScript(JS_HTML5_DND, e1.getWebElement(), e2.getWebElement())
         
            browser.sleep('3000');
            browser.driver.findElement(by.xpath("//option[contains(text(),'100%')]")).click();
            browser.sleep('4000');


  };
  function dragAndDropContentTable(){
    var abc= browser.findElement(by.xpath("//img[@src='../../assets/navbar-hide-arrow-icon.png']"));
    browser.executeScript("arguments[0].click()",abc);
     browser.sleep('3000');   
     var e1 = element(by.id('ContentTable'));
            var e2= element(by.xpath("//div[@class='default-rectangle']"));
            browser.sleep('1000');
           // browser.driver.findElement(by.xpath("//select[@class='form-control ng-untouched ng-pristine ng-valid']//option[9]")).click();
           browser.findElement(by.xpath("//option[9]")).click();
           browser.sleep('5000');
            const JS_HTML5_DND = 'function e(e,t,n,i){var r=a.createEvent("DragEvent");r.initMouseEvent(t,!0,!0,o,0,0,0,c,g,!1,!1,!1,!1,0,null),Object.defineProperty(r,"dataTransfer",{get:function(){return d}}),e.dispatchEvent(r),o.setTimeout(i,n)}var t=arguments[0],n=arguments[1],i=arguments[2]||0,r=arguments[3]||0;if(!t.draggable)throw new Error("Source element is not draggable.");var a=t.ownerDocument,o=a.defaultView,l=t.getBoundingClientRect(),u=n?n.getBoundingClientRect():l,c=l.left+(l.width>>1),g=l.top+(l.height>>1),s=u.left+(u.width>>1)+i,f=u.top+(u.height>>1)+r,d=Object.create(Object.prototype,{_items:{value:{}},effectAllowed:{value:"all",writable:!0},dropEffect:{value:"move",writable:!0},files:{get:function(){return this._items.Files}},types:{get:function(){return Object.keys(this._items)}},setData:{value:function(e,t){this._items[e]=t}},getData:{value:function(e){return this._items[e]}},clearData:{value:function(e){delete this._items[e]}},setDragImage:{value:function(e){}}});if(n=a.elementFromPoint(s,f),!n)throw new Error("The target element is not interactable and need to be scrolled into the view.");u=n.getBoundingClientRect(),e(t,"dragstart",101,function(){var i=n.getBoundingClientRect();c=i.left+s-u.left,g=i.top+f-u.top,e(n,"dragenter",1,function(){e(n,"dragover",101,function(){n=a.elementFromPoint(c,g),e(n,"drop",1,function(){e(t,"dragend",1,callback)})})})})';
 
          browser.driver.executeScript(JS_HTML5_DND, e1.getWebElement(), e2.getWebElement())
         
            browser.sleep('3000');
            browser.driver.findElement(by.xpath("//option[contains(text(),'100%')]")).click();
            browser.sleep('4000');


  };