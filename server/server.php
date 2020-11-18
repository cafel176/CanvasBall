<?php

function str_check( $str,$con )
{
    if (!get_magic_quotes_gpc()) // 判断magic_quotes_gpc是否打开
    {
        $str = addslashes($str); // 进行过滤
    }
    if (!is_numeric($str))
    {
        $str = mysqli_real_escape_string($con,$str);
    }

    $str = trim($str);
    $str = strip_tags($str);
    $str = str_replace("_", "\_", $str); // 把 '_'过滤掉
    $str = str_replace("%", "\%", $str); // 把' % '过滤掉
    $str = str_replace("select", "", $str);
    $str = str_replace("insert", "", $str);
    $str = str_replace("update", "", $str);
    $str = str_replace("delete", "", $str);

    return $str;
}
$servername = "localhost";
$username = "root";
$password = "";

// 创建连接
$conn = mysqli_connect($servername, $username, $password);

$type=str_check($_POST['Cty_pe'],$conn);
$number = str_check($_POST['Anum_ber'],$conn);
//type为0时用number进行查重，大于0时写入数据
if($type>0) {
    $name = str_check($_POST['Fna_me'],$conn);
    $correct = str_check($_POST['Ecor_rect'],$conn);
    $we=$_POST['Lti_me'];
    $time = str_check($_POST['Lti_me'],$conn);
    $home = str_check($_POST['Mho_me'],$conn);
    $check = $_POST['Wche_ck'];
}

// 检测连接
if ($conn) {
//连接到指定库
    $db_selected = mysqli_select_db($conn, "mydata");
    if (!$db_selected) {
        //指定库不存在则创建
        $sql = "CREATE DATABASE mydata default charset=utf8";
        $db_selected = $conn->query($sql);
        if ($db_selected) {
            mysqli_select_db($conn, "mydata");
        }
    }
    if ($db_selected) {
        //检查指定的表，指定表不存在则创建
        $sql = "CREATE" . " TABLE IF NOT EXISTS myform (
Kid INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
Cnumber VARCHAR(12) NOT NULL,
Aname VARCHAR(30) NOT NULL,
Fcorrect INT(3),
Etime FLOAT(3),
Lhome VARCHAR(50) NOT NULL,
Mcreatetime DATETIME NOT NULL 
) default charset=utf8;";
        $conn->query($sql);


        if ($type > 0) {
            //type大于0时输入数据
            if($check==(floor($we) + 3745*517) % 28396) {
                $conn->query('SET NAMES UTF8');
                $sql = "INSERT" . " INTO myform (Cnumber,Aname,Fcorrect,Etime,Lhome,Mcreatetime) VALUES ('" . $number . "','" . $name . "','" . $correct . "','" . $time . "','" . $home . "',now())";
                $result = mysqli_query($conn, $sql);
                //写入成功返回success，否则返回fail
                if ($result) {
                    echo "success";
                } else {
                    echo "fail";
                }
            }
            else {
                echo "fq";
            }
        } else {
            //type为0时查重
            $sql = "SELECT" . " Kid FROM myform WHERE Cnumber='" . $number . "'";

            $result = mysqli_query($conn, $sql);
            //有重复返回fail，否则返回success
            if ($result->num_rows < 2) {
                echo "success";
            } else {
                echo "fail";
            }
        }
    }
}
?>
