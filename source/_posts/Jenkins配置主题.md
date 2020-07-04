---
title: Jenkins配置主题
abbrlink: 56383
date: 2020-06-25 10:43:53
tags: Jenkins
---


Jenkins默认的主题实在是太丑了,所以简单配置了一下主题, 现在舒服多了

<!-- more -->

Jenkins主题的配置步骤:
* 首先进入配置Jenkins主题的网站: http://afonsof.com/jenkins-material-theme/
* 1. 选择你喜欢的颜色，这里我选teal, 2. 然后上传logo，logo最好是透明背景的，要不然会很丑. 3.下载主题
* 将该主题上传到服务器中。因为我是用docker安装Jenkins的，然后Jenkins指向的实际目录是/home/jenkins_home,，所以进入 /home/jenkins_home下的useContent目录，然后新建layout目录，然后上传该主题到layout目录下
* 进入Jenkins管理界面, 点击Manage Jenkins，然后点击Manage Plugins，在可选插件项的搜索框中搜索Simple Theme并安装，安装成功后点击Manage Jenkins，然后点击Configure System，找到Theme一栏，新增CSS URL，填入主题所在位置的路径(http://192.168.155.4:9090/userContent/layout/主题名称.css PS：192.168.155.4:9090是访问Jenkins的路径，主题名称填具体的主题名称)
* 保存
> 具体参考： https://blog.csdn.net/DynastyRumble/article/details/103910441

Jenkins的登录账号密码
账号: admin
密码: wsyzhstbms

/** https://jenkins-zh.cn/ */