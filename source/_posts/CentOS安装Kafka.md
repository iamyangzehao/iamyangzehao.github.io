---
title: CentOS安装Kafka
abbrlink: 42626
date: 2020-06-21 23:17:42
tags:
---



最近刚开始学习Kafka，第一步肯定是学会怎么安装Kafka，现在我来讲解一下

<!-- more -->

### 第一步：安装JDK。安装JDK的步骤比较简单，这里可以直接在网上找教程学习怎么安装

### 第二步：安装Zookeeper。除了安装JDK，还需要安装Zookeeper,安装和启动Zookeeper的步骤参考[CentOS安装ZooKeeper](https://segmentfault.com/a/1190000022199813)

### 第三步： 安装Kafka。

安装Kafka分为:
* 先下载Kafka并解压出来
* 修改config/server.properties文件, 主要修改listeners、advertised.listeners配置(将host.name修改成kafka安装的主机的ip)和log.dirs(主要存放kafka的日志，可以在kafka根目录下创建一个logs文件夹，并将log.dirs设置成该文件夹的路径)和zookeeper.connect（设置连接的Zookeeper所在主机的ip，如果kafka和Zookeeper在同一台机器上，该配置不用改，默认为localhost）
* 最后，在kafka的根目录下，执行bin/kafka-server-start.sh config/server.properties & 命令，让kafka以后台方式启动
> 注意事项:kafka启动时，报cannot allocate memory错误，即内存不足，因为学生机内存较小，1G，所以需要更改kafka启动时的内存，解决方法: 进入bin目录，修改kafka-server-start.sh文件，将export KAFKA_HEAP_OPTS="-Xmx1G -Xms1G"改成export KAFKA_HEAP_OPTS="-Xmx256M -Xms128M" ，改小点，确保能启动

Kafka的基本命令:
* bin/kafka-server-stop.sh  -- 停止Kafka
* bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test-topic 创建名为test-topic的Topic，localhost可更换为zookeeper所在的机器的ip
* bin/kafka-topics.sh --list --zookeeper localhost:2181 -- 查看已经创建的Topic信息
* bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test-topic -- 发送消息
* bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-topic --from-beginning   -- 接收消息

> 如何安装Kafka图形界面工具Kafka-Center?
1. 网址: https://github.com/xaecbd/KafkaCenter 到github上下载table_script.sql和application.properties，并上传到服务器中(我传到了/usr/local/workspace/projects/gitproject/others目录中)
2. 将table_script.sql导入到数据库中
3. 修改application.properties配置文件，注意主要修改数据库地址和ElasticSearch地址(ES没有的话可不改)
4. 进入到/usr/local/workspace/projects/gitproject/others目录中，执行docker run -d -p 8240:8240 --name KafkaCenter -v ${PWD}/application.properties:/opt/app/kafka-center/config/application.properties xaecbd/kafka-center:2.1.0 命令
5. 在安全组中开放8240端口号(因为在上一步中指定了Kafka-Center的端口号为8240，不放开该端口号就无法访问)
6. 访问http://ip:8240，我的机器的ip是129.204.22.23， 所以通过http://129.204.22.23:8240/访问，访问账号密码是admin/admin