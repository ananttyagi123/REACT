// React Fiber Arcitecture 

// Reconcilation Algorithm 
// the algorithm react 

// whenever the app render the react forms a tree like structure of your complete DOM
// whenever you Chaange the State from your component it recreate the New React DOM tree
// both previous and new re-render DOM tree
// They both tree are Virtual Tree 
// re-concilation algorithm diff one tree with the anathor to check which part need to be changed
//  High performance issues 

// React Fiber 
// solves the performance issue 
// KEY POINTS FOR UI ------
// whenever you update the state there is not nessecary to change the updated UI immediatly 
// high priority task first then low priority 
// to boost performance 
// it dependes on priority 

// different updates have different priority the animation update task is more priority than data store update
// 1.animation 2.data update 

// React Fiber Advantage -----------------------------------
// pause some ork and came back
// assign priority 
// abort work if no longer needed
// reuse previouslly  completed work

// ----------virtual Satck frame ------------------
// re-implimentation of Call Stack

