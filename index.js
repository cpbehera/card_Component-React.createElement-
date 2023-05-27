const element = React.createElement('div',{class:'main'},
    [React.createElement('img',{src:'/user.png'}),
    React.createElement('h1',null,'Alexandra Caulea'),
    React.createElement('p',null,'I enjoy drinking a cup of coffee every day'),

    // activity wrapper div
    React.createElement('div',{class:'activity'},

    // Individual div inside activity wrapper
        React.createElement('div',{class:'post'},[React.createElement('span',null,'172'),React.createElement('span',null,'Posts')]),
        React.createElement('div',{class:'followers'},[React.createElement('span',null,'47'),React.createElement('span',null,'Followers')]),
        React.createElement('div',{class:'following'},[React.createElement('span',null,'20'),React.createElement('span',null,'Following')]),
        )
    ]
)

ReactDOM.render(element,document.getElementById('root'));