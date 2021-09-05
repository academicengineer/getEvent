#! /bin/bash


# 開始スライドの表示
# cd /mnt/c/Users/sa002394/Desktop/getEvent/
# node app.js &

# 講義スライドの開始
# ブラウザの開始ボタンを押されたら，以下の処理を実行
# NAOに curl を行う 
STATUS=`curl -s http://localhost -o /dev/null -w '%{http_code}'`

IP="192.168.113.14"

#curl -s http://localhost -o /dev/null -w '%{http_code}\n'

echo $STATUS

END_STATUS="200"

for ((i=0; i<10; i++))
do
	if [ "$STATUS" = "$END_STATUS" ]; then
		SLIDE_NUM=i
		WC= cat /mnt/c/nginx-1.20.1/logs/access.log | wc -l
		echo $WC
		SLIDE_NUM=$((++SLIDE_NUM))
		echo $SLIDE_NUM
		cd
		python3 test.py
		# curl 192.168.113.14/slide"$SLIDE_NUM".html
		curl -s http://"$IP"/slide"$SLIDE_NUM".html -o /dev/null -w '%{http_code}\n'
		# cd /mnt/c/Users/sa002394/Desktop/getEvent/
		# node app.js &

		# NAOから curl で GETリクエストが表示されたら次の処理へ
		# nginx の access_logに１行追加されたかどうかを確
		WC_CHECK= $((WC - 1))
		if [[ $WC_CHECK = $WC ]]; then
			echo "次の講義スライドを表示します"
		else
			echo "エラー"
		fi
	else
		echo "違います"
	fi
done
