toast("start...");
var gp1_1 = [806.2, 1758.0];
var gp1_2 = [241.8, 303.7];

var gp2_1 = [783.2, 1738.0];
var gp2_2 = [247.8, 321.7];

var gp3_1 = [782.2, 1716.0];
var gp3_2 = [159.8, 333.7];

var gp4_1 = [785.2, 1766.0];
var gp4_2 = [169.8, 252.8];
var dur = 2200;//滑动时间
//姓名
points = text("*姓名：").findOne().bounds();
bounds(40, points.top + 62, 1039, points.bottom + 119).setText("田汝浩");
//boundsInside(40, points.top + 56, 1039, points.bottom + 119).findOne().setText("田汝浩");
toast("姓名填写完成");
//滑动-1
swipe(gp1_1[0], gp1_1[1], gp1_2[0], gp1_2[1], dur);
points = text("信息与计算科学").findOne().bounds();
click(points.centerX(), points.centerY());
toast("专业填写完成");
//学号[[40,796][1039,906]]
points = text("*学号").findOne(2000).bounds();
toast(points.top + ","+ points.bottom+"文本框："+(points.top + 60) + ", " + (points.bottom + 118));
bounds(40,points.top + 59,1039, points.bottom + 119).setText("1710820215");
toast("学号填写完成");
//位置信息
click("获取当前位置");
toast("位置填写完成");

points = text("无以下症状").findOne().bounds();
click(points.centerX(), points.centerY());
//滑动-2
swipe(gp2_1[0], gp2_1[1], gp2_2[0], gp2_2[1], dur);

//健康状况 [54,1516][105,1565]


//晨检 [54,320][105,369]
points = text("*晨检体温是否≥37.3℃ ##检测时间：6:30-8:20").findOne().bounds();
click(54 + (105-54)/2, points.centerY() + 80);
//午检[54,593][105,642]
points = text("*午检体温是否≥37.3℃ ##检测时间：12:00-14:00").findOne().bounds();
click(54 + (105-54)/2, points.centerY() + 80);
//晚检[54,866][105,917]
points = text("*晚检体温是否≥37.3℃ ##检测时间：20:00-21:00").findOne().bounds();
click(54 + (105-54)/2, points.centerY() + 80);

//滑动-3
swipe(gp3_1[0], gp3_1[1], gp3_2[0], gp3_2[1], dur);

//早通风，时：[40,1120][189,1225]，分：[210,1120][359,1225]
points = text("*早晨通风时间（提示每次通风不少于30分钟）").findOne().bounds();
click(40 + (189-40)/2, points.centerY() + 75);
sleep(1000);
click("01");
click(210 + (395-210)/2, points.centerY() + 75);
sleep(1000);
click("01");
//午通风，时：[40,1341][189,1446]，分：[210,1341][359,1446]
points = text("*中午通风时间（提示每次通风不少于30分钟）").findOne().bounds();
click(40 + (189-40)/2, points.centerY() + 75);
sleep(1000);
click("01");
click(210 + (395-210)/2, points.centerY() + 75);
sleep(1000);
click("01");
//晚通风，时：[40,1565][189,1670]，分：[210,1565][359,1670]
points = text("*傍晚通风时间（提示每次通风不少于30分钟）").findOne().bounds();
click(40 + (189-40)/2, points.centerY() + 75);
sleep(1000);
click("01");
click(210 + (395-210)/2, points.centerY() + 75);
sleep(1000);
click("01");
//消毒时间，时：[40,1789][189,1894]，分：[210,1789][359,1894]
points = text("*今日消毒时间").findOne().bounds();
click(40 + (189-40)/2, points.centerY() + 75);
sleep(1000);
click("01");
click(210 + (395-210)/2, points.centerY() + 75);
sleep(1000);
click("01");
//最后三个
points = text("没有也不曾使用违禁电器").findOne().bounds();
click(points.centerX(), points.centerY());
points = text("不在宿舍内及楼道内吸烟").findOne().bounds();
click(points.centerX(), points.centerY());
points = text("人走断电").findOne().bounds();
click(points.centerX(), points.centerY());

//滑动-4
swipe(gp4_1[0], gp4_1[1], gp4_2[0], gp4_2[1], dur);

//提交（测试期间不运行）
//click("提交")
toast("finish!")