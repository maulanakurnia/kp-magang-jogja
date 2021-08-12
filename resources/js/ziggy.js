const Ziggy = {"url":"http:\/\/magang.test","port":null,"defaults":{},"routes":{"home":{"uri":"\/","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"attendance.index":{"uri":"attendance","methods":["GET","HEAD"]},"attendance.create":{"uri":"attendance\/create","methods":["GET","HEAD"]},"attendance.store":{"uri":"attendance","methods":["POST"]},"attendance.edit":{"uri":"attendance\/{attendance}\/edit","methods":["GET","HEAD"]},"attendance.update":{"uri":"attendance\/{attendance}","methods":["PUT","PATCH"],"bindings":{"attendance":"id"}},"attendance.destroy":{"uri":"attendance\/{attendance}","methods":["DELETE"]},"attendaceshow":{"uri":"attendance\/{team}","methods":["GET","HEAD"]},"admin.index":{"uri":"admin","methods":["GET","HEAD"]},"admin.store":{"uri":"admin","methods":["POST"]},"admin.show":{"uri":"admin\/{admin}","methods":["GET","HEAD"],"bindings":{"admin":"id"}},"admin.edit":{"uri":"admin\/{admin}\/edit","methods":["GET","HEAD"],"bindings":{"admin":"id"}},"admin.update":{"uri":"admin\/{admin}","methods":["PUT","PATCH"]},"admin.destroy":{"uri":"admin\/{admin}","methods":["DELETE"]},"agency.index":{"uri":"agency","methods":["GET","HEAD"]},"agency.create":{"uri":"agency\/create","methods":["GET","HEAD"]},"agency.store":{"uri":"agency","methods":["POST"]},"agency.show":{"uri":"agency\/{agency}","methods":["GET","HEAD"]},"agency.edit":{"uri":"agency\/{agency}\/edit","methods":["GET","HEAD"]},"agency.update":{"uri":"agency\/{agency}","methods":["PUT","PATCH"]},"agency.destroy":{"uri":"agency\/{agency}","methods":["DELETE"]},"project.index":{"uri":"project","methods":["GET","HEAD"]},"project.store":{"uri":"project","methods":["POST"]},"project.show":{"uri":"project\/{project}","methods":["GET","HEAD"],"bindings":{"project":"id"}},"project.edit":{"uri":"project\/{project}\/edit","methods":["GET","HEAD"]},"project.update":{"uri":"project\/{project}","methods":["PUT","PATCH"]},"project.destroy":{"uri":"project\/{project}","methods":["DELETE"]},"progress.store":{"uri":"progress","methods":["POST"]},"progress.show":{"uri":"project\/progress\/{progressProject}","methods":["GET","HEAD"],"bindings":{"progressProject":"id"}},"progress.update":{"uri":"progress\/{progressProject}","methods":["PUT"],"bindings":{"progressProject":"id"}},"progress.destroy":{"uri":"progress\/{progressProject}","methods":["DELETE"],"bindings":{"progressProject":"id"}},"valuation.store":{"uri":"valuation","methods":["POST"]},"valuation.update":{"uri":"valuation\/{valuation}","methods":["PUT"],"bindings":{"valuation":"id"}},"submission.index":{"uri":"submission","methods":["GET","HEAD"]},"submission.create":{"uri":"submission\/create","methods":["GET","HEAD"]},"submission.store":{"uri":"submission","methods":["POST"]},"submission.show":{"uri":"submission\/{team}","methods":["GET","HEAD"]},"submission.update":{"uri":"submission\/{team}\/{status}","methods":["PUT"],"bindings":{"team":"id"}}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
