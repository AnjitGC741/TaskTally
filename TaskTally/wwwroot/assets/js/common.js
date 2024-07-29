window.addEventListener('popstate', function (event) {
    location.reload();
});
$(document).ready(function () {

    $('.dataTableWithExport').DataTable({
        dom: '<"d-flex justify-content-between"Bf>rt<"d-flex justify-content-between"lip>',
        //"dom": 'Bfrtilp',
        "buttons": [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "pageLength": 100,
        "responsive": true,
        "lengthMenu": [[100, 200, 500, -1], [100, 200, 500, "All"]]
    });
    $('.dataTable').DataTable({
        "pageLength": 100,
        "responsive": true,
        "lengthMenu": [[100, 200, 500, -1], [100, 200, 500, "All"]]
    });
    $('li a.nav-link.active').parents('#sidebarDashboards').addClass('show');
    if ($('#sidebarDashboards').hasClass('show')) {
        $('a[href="#sidebarDashboards"]').removeClass('collapsed').attr('aria-expanded', 'true');
    }
});
function printDiv($id) {
    window.print();
    return;
    $id = $id || '#printableContent';
    var printContents = $($id).html();
    var originalContents = $('body').html();

    $('body').html(printContents);

    window.print();

    $('body').html(originalContents);
}
function printDiv1() {
    var printContents = document.getElementById('printableContent').innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    console.log(printContents);
    
    window.print();

    document.body.innerHTML = originalContents;
}