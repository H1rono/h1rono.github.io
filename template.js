//! テンプレートHTML用のJavaScript
const template = /* 即時呼び出し */(function () {
    //! returnで返すオブジェクト
    let tmp = {};

    /**
     * @brief ヘッダーメニューのアクションを設定
     * @note 後述のonloadで呼ばれるようになっている
     */
    tmp.setupHeaderMenu = function () {
        // ハンバーガーメニューの開閉処理
        document.querySelector("#header-menu-button").addEventListener("click", function() {
            document.body.classList.toggle("header-menu-open");
        });
    };

    /**
     * @brief load時に呼ぶ関数
     * @note テンプレートを使う場合はwindow.addEventListener("load", template.onload);
     */
    tmp.onload = function () {
        tmp.setupHeaderMenu();
    };

    return tmp;
})();