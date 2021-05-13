
var As = [381.6, 1314.3];
var Bs = [788.2, 1231.4];
var Ae = [390.5, 657.7];
var Be = [780.2, 650.7];


toast("开始运行今日头条刷金币脚本...")
app.launchApp("今日头条极速版")
sleep(500);
while(!click("任务"));//7天内不登陆任务界面，终止发放奖励。
sleep(1000);
while(!click("首页"));
// vivo x9设备分辨率 1080x1920，x为横着的，y为竖着的，（0，0）为左上角
//查看分辨率的方式：adb shell dumpsys window displays 后： cur=1080x1920
//注意：头条恩一次退出键，是刷新。
//动作：1,滑动 2,选取坐标点击 3,停留 4，退出（刷新功能）
function slide(){
    var r1 = Math.random();
    var r2 = Math.random();
    var r3 = Math.random();
    a1 = (r1 > 0.5) ? As : Bs;
    a2 = (r2 > 0.5) ? Ae : Be;
    if(r3 > 0.2){
        pstart = a1;
        pend = a2;
    }else{
        pstart = a2;
        pend = a1;
    }
    var duration = (Math.random()+1)*2;
    swipe(pstart[0], pstart[1], pend[0], pend[1], duration*1000);//滑动
    return;
}
function GetRandomNum(Min,Max){
    var Range = Max - Min;   
    var Rand = Math.random();   
    return(Min + Math.round(Rand * Range));   
}
//获取点击坐标
function randpos(){
    point1 = [174.8, 357.7];
    point2 = [911.2, 1750.0];
    return [ GetRandomNum(point1[0], point2[0]), GetRandomNum(point1[1], point2[1]) ];
}
var point, num, f;
while(true){
    num = parseInt((Math.random()+1)*5);
    while(num--){
        //执行随机次数的滑动
        slide();
        sleep(900);//0.9s
        if(Math.random() > 0.8){
            point = randpos();
            click(point[0], point[1]);
            t = GetRandomNum(10000, 60000);
            toast("看"+t/1000+"s");
            f = id("com.ss.android.article.lite:id/dx").findOne(2000);//流量使用时，会提示是否播放。
            if(f!=null){
                f.click();
                toast("继续播放");
            }
            sleep(t);//看10-60s内容
            f = id("com.ss.android.article.lite:id/adk").findOne(2000);//文章1返回键
            if(f!=null){
                f.click();
                toast("文章1返回键");
                continue;
            }
            f = id("com.ss.android.article.lite:id/e6").findOne(2000);//抖音返回键
            if(f!=null){
                f.click();
                toast("抖音返回键");
                continue;
            }
            f = id("com.ss.android.article.lite:id/a7u").findOne(2000);//视频1返回键
            if(f!=null){
                f.click();
                toast("视频1返回键");
                continue;
            }
            f = id("com.ss.android.newugc:id/left_btn").findOne(2000);//视频2返回键
            if(f!=null){
                f.click();
                toast("视频2返回键");
                continue;
            }
        }
    }
    /*
    if(Math.random() > 0.95){
        Back();//返回键（刷新)
    }
    */


}