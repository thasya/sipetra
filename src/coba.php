<div id="app">
  <button @click="tableToExcel('table', 'Lorem Table')">export </button>
  <table ref="table" id="loremTable" summary="lorem ipsum sit amet" rules="groups" frame="hsides" border="2">
    <caption>lorem ipsum</caption>
    <colgroup align="center"></colgroup>
    <colgroup align="left"></colgroup>
    <colgroup span="2" align="center"></colgroup>
    <colgroup span="3" align="center"></colgroup>
    <thead valign="top">
      <tr>
        <th>id</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>lorem ipsum</td>
        <td>sit amet</td>
      </tr>
    </tbody>
  </table>
</div>

