var ME = require('../lib/mouseEvent');
var PU = require('../phantom/PUnits');
module.exports = function(page, spawn, fs) {
//    console.log(assert.equal('2015/12/05~','22');
    PU.delayRender().setOtherCommands(function(hasTip,self){
                console.log('====================mocha-phantomjs begin======================');
//                console.log(hasTip);
                var child = self.spawnSugar(['mocha-phantomjs','-R','json','tester/index.html','-f','doc/mp.js']);
//                var child = self.spawnSugar(['mocha','lib/mocha/testMocha.js','--reporter','mochawesome']);
//                console.log(child);
//                
                child.stdout.on('data',function(data){
                    if(!hasTip){
                        hasTip = true;
                        // console.log('begin mochawesome !!!');
                        // console.log('====================mocha-phantomjs begin======================');
                        // console.log(data);
                        // var data = fs.read('doc/mp.js');
                        // fs.write(mp,data);
                        // self.handlerMPJSON(data);
                    }
                });
                child.stderr.on('data',function(data){
                    console.log(data);
                });
                child.on('exit', function() {
//                    console.log('mochawesome complete !!!');
                    var data = fs.read('doc/mp.js');
                    self.handlerMPJSON(data);
                    console.log('====================mocha-phantomjs complete====================');
                    phantom.exit();
                });
//                self.spawnSugar(['start','png']);
                var configMochaHTML = '<div id="mocha"></div><script src="mocha.js"></script><script src="../lib/require.js" data-main="_runner.js"></script><script src="../lib/jquery.min.js"></script>';
                fs.write(tx, page.content+configMochaHTML);
//                phantom.exit();
    }).shutDown();
//    .delayRender({
//        ele:'J_Onmousetr',
//        eventType:'dblclick'
//    }).delayRender({
//        ele:'J_Onmousetr',
//        eventType:'click'
//    }).delayRender({
//        ele:'J_dialogMini',
//        eventType:'click'
//    }).delayRender({
//        ele:'J_tabNav2',
//        eventType:'click'
//    })
    var clearPng = PU.spawnSugar(['del','png\\*.png']);
    clearPng.stderr.on('data',function(data){
        console.log(data);
    });
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_Onmousetr','click');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/A' + png);
//        }, 500);
//    },300)
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_Onmousetr','dblclick');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/B' + png);
//        }, 500);
//    }, 1500);
//    fs.write(tx, page.content);
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_dialogClose','click');
//            bindEvent('J_Onmousetr','click');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/C' + png);
//        },500);
////        loadOver = true;
//    },3000);
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_Onmousetr','dblclick');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/D' + png);
//        },500);
////        loadOver = true;
//    },4000);
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_dialogMini','click');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/E' + png);
//        },500);
////        loadOver = true;
//    },5000);
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_dialogRestore','click');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/E2' + png);
//        },500);
////        loadOver = true;
//    },6000);
//    
//    window.setTimeout(function(){
//        var tt = page.evaluate(function(bindEvent){
//            bindEvent('J_tabNav2','click');
////            bindEvent('J_dialogMini','click');
//        }, ME.bindEvent);
//        window.setTimeout(function(){
//            page.render('./png/F' + png);
//        },500);
//        loadOver = true;
//    },7000);
//    
//    window.setInterval(function(){
//        if(loadOver){
//            console.log('over');
//            //mocha
//            var child = spawn('cmd.exe',['/s','/c','mocha','lib/mocha/testMocha.js','--reporter','mochawesome']);
//            child.stdout.on('data',function(data){
//                console.log('mochawesome down');
//                phantom.exit();
//            });
//            spawn('cmd.exe',['/s','/c','start','png']);
//        } else {
//            console.log(loadOver);
//        }
//    },1000);
}