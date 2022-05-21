if (localStorage.length > 0) {

    var statusLs = localStorage.getItem("dark-mode");

    $("#dark-btn").click(function() {
        if (statusLs != 0) {

            localStorage.setItem("dark-mode", 0);
            $('header').toggleClass('dark');

        } else {
            if (statusLs == 0) {
                localStorage.setItem("dark-mode", 1);
            }
        }
    });

} else {
    localStorage.setItem("dark-mode", 0);
}