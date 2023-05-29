const element = React.createElement('div', { class: 'main' },
    [React.createElement('img', { src: './user.png' }),
    React.createElement('h1', null, 'Alexandra Caulea'),
    React.createElement('p', null, 'I enjoy drinking a cup of coffee every day'),

    // activity wrapper div
    React.createElement('div', { class: 'activity' },

        // Individual div inside activity wrapper
            React.createElement('div', { class: 'post' },
                [React.createElement('span', {class:'count'}, '172'), React.createElement('span', null, 'Posts')]),

            React.createElement('div', { class: 'followers' },
                [React.createElement('span', {class:'count'}, '47'), React.createElement('span', null, 'Followers')]),

            React.createElement('div', { class: 'following' },
                [React.createElement('span', {class:'count'}, '20'), React.createElement('span', null, 'Following')]),
    ),
    React.createElement('div',{class:'btns'},
    [
        React.createElement('button',null,'Follow'),React.createElement('button',null,'Message')
    ])
    ]
)

ReactDOM.render(element, document.getElementById('root'));