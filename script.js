// 获取 HTML 元素
const canvas = document.getElementById('cv');
const btn = document.getElementById('downloadBtn');

// 绑定点击事件
btn.addEventListener('click', function() {
    // 1. 将 canvas 转换成 base64 图像数据
    // 建议使用 image/png 以保持透明度，或 image/jpeg 以压缩体积
    const dataURL = canvas.toDataURL("image/png");

    // 2. 打开一个新标签页
    const newWindow = window.open();

    if (newWindow) {
        // 3. 向新窗口写入 HTML 内容
        // 这里的样式可以让图片居中，方便移动端用户长按
        newWindow.document.write(`
            <html>
                <head>
                    <title>长按保存图片</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #333; }
                        img { max-width: 100%; height: auto; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
                    </style>
                </head>
                <body>
                    <img src="${dataURL}" alt="Canvas Image" />
                </body>
            </html>
        `);
        newWindow.document.close(); // 关闭流，确保页面加载完成
    } else {
        alert("新窗口被浏览器拦截了，请允许弹出窗口请求。");
    }
});