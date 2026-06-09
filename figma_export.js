// Figma Export
async function batchExport() {
 const nodes=figma.currentPage.selection;
 if(nodes.length===0){figma.notify("Select first");return;}
 for(const n of nodes){
  await n.exportAsync({format:"PNG",constraint:{type:"SCALE",value:2}});
  figma.notify("Exported: "+n.name);
 }
 figma.notify("Done!");
}
batchExport();
