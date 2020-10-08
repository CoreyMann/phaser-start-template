const softkeyCallback = {
    left: function()
    {   inputState.left = 1;   },
    center: function()
    {   inputState.ok = 1;   },
    right: function()
    {   inputState.right = 1; },
    up: function()
    {   inputState.up = 1;   },
    down: function()
    {   inputState.down = 1;   },
    _back: function()
    {   inputState.back = 1;   },
    volumeUp: function()
    {      },
    volumeDown: function()
    {      },
    pause: function()
    {
        togglePause();
    }
};

const softkeyReleaseCallback = {
    left: function()
    {   inputState.left = 0;   },
    center: function()
    {   inputState.ok = 0;   },
    right: function()
    {   inputState.right = 0;   },
    up: function()
    {   inputState.up = 0;   },
    down: function()
    {   inputState.down = 0;   },
    _back: function()
    {   inputState.back = 0;   },
    volumeUp: function()
    {      },
    volumeDown: function()
    {      },
    pause: function()
    {      }
};

const softkeyHeldCallback = {
    left: function()
    {   inputState.left = 1;   },
    center: function()
    {   inputState.ok = 1;   },
    right: function()
    {   inputState.right = 1;   },
    up: function()
    {   inputState.up = 1;   },
    down: function()
    {   inputState.down = 1;   },
    _back: function()
    {   inputState.back = 1;   },
    volumeUp: function()
    {      },
    volumeDown: function()
    {      },
    pause: function()
    {      }
};

function handleKeyDown(evt)
{
    //console.log(evt);
    switch (evt.key) {
        case 'ArrowLeft':
            // Action case press left key
            softkeyCallback.left();
        break;
        case 'ArrowRight':
            // Action case press right key
            softkeyCallback.right();
        break;
        case 'ArrowUp':
            // Action case press up key
            softkeyCallback.up();
        break;
        case 'ArrowDown':
            // Action case press down key
            softkeyCallback.down();
        break;
        case 'Back':
            // Action case press back key
            softkeyCallback._back();
        break;
        case 'Enter':
            // Action case press enter key
            softkeyCallback.center();
        break;
        case 'SoftLeft':
            //Action Case press left bumper
            softkeyCallback.left();
        break;
        case 'SoftRight':
            //Action Case press right bumper
            softkeyCallback.right();
        break;
        case '0':
            //Action Case press 0
            softkeyCallback.pause();
        break;
        case '1':
            //Action Case press 1
            softkeyCallback.volumeUp();
        break;
        case '2':
            //Action Case press 2
            softkeyCallback.up();
        break;
        case '3':
            //Action Case press 3
            softkeyCallback.volumeDown();
        break;
        case '4':
            //Action Case press 4
            softkeyCallback.left();
        break;
        case '5':
            //Action Case press 5
            softkeyCallback.center();
        break;
        case '6':
            //Action Case press 6
            softkeyCallback.right();
        break;
        case '7':
            //Action Case press 7
            softkeyCallback.left();
        break;
        case '8':
            //Action Case press 8
            softkeyCallback.down();
        break;
        case '9':
            //Action Case press 9
            softkeyCallback.right();
        break;
        case '*':
            //Action Case press 9
            softkeyCallback.left();
        break;
        case '#':
            //Action Case press 9
            softkeyCallback.right();
        break;
    }
};

function handleKeyUp(evt)
{
    console.log('You let go of button'+evt.key);

    switch (evt.key) {
        case 'ArrowLeft':
            // Action case release left key
            softkeyReleaseCallback.left();
        break;

        case 'ArrowRight':
            // Action case release right key
            softkeyReleaseCallback.right();
        break;

        case 'ArrowUp':
            // Action case release up key
            softkeyReleaseCallback.up();
        break;

        case 'ArrowDown':
            // Action case release down key
            softkeyReleaseCallback.down();
        break;

        case 'Back':
            // Action case release back key
            softkeyReleaseCallback._back();
        break;

        case 'Enter':
            // Action case release enter key
            softkeyReleaseCallback.center();
        break;

        case 'SoftLeft':
            //Action Case press left bumper
            softkeyReleaseCallback.left();
        break;
        case 'SoftRight':
            //Action Case press right bumper
            softkeyReleaseCallback.right();
        break;
        case '0':
            //Action Case press 0
            softkeyReleaseCallback.pause();
        break;
        case '1':
            //Action Case press 1
            softkeyReleaseCallback.volumeUp();
        break;
        case '2':
            //Action Case press 2
            softkeyReleaseCallback.center();
        break;
        case '3':
            //Action Case press 3
            softkeyReleaseCallback.volumeDown();
        break;
        case '4':
            //Action Case press 4
            softkeyReleaseCallback.left();
        break;
        case '5':
            //Action Case press 5
            softkeyReleaseCallback.center();
        break;
        case '6':
            //Action Case press 6
            softkeyReleaseCallback.right();
        break;
        case '7':
            //Action Case press 7
            softkeyReleaseCallback.left();
        break;
        case '8':
            //Action Case press 8
            softkeyReleaseCallback.center();
        break;
        case '9':
            //Action Case press 9
            softkeyReleaseCallback.right();
        break;
        case '*':
            //Action Case press 9
            softkeyReleaseCallback.left();
        break;
        case '#':
            //Action Case press 9
            softkeyReleaseCallback.right();
        break;
    }
};

function handleKeyHeld(evt)
{
    console.log('You let go of button'+evt.key);

    switch (evt.key) {
        case 'ArrowLeft':
            // Action case release left key
            softkeyHeldCallback.left();
        break;

        case 'ArrowRight':
            // Action case release right key
            softkeyHeldCallback.right();
        break;

        case 'ArrowUp':
            // Action case release up key
            softkeyHeldCallback.up();
        break;

        case 'ArrowDown':
            // Action case release down key
            softkeyHeldCallback.down();
        break;

        case 'Back':
            // Action case release back key
            softkeyHeldCallback._back();
        break;

        case 'Enter':
            // Action case release enter key
            softkeyHeldCallback.center();
        break;

        case 'SoftLeft':
            //Action Case press left bumper
            softkeyHeldCallback.left();
        break;
        case 'SoftRight':
            //Action Case press right bumper
            softkeyHeldCallback.right();
        break;
        case '0':
            //Action Case press 0
            softkeyHeldCallback.pause();
        break;
        case '1':
            //Action Case press 1
            softkeyHeldCallback.volumeUp();
        break;
        case '2':
            //Action Case press 2
            softkeyHeldCallback.center();
        break;
        case '3':
            //Action Case press 3
            softkeyHeldCallback.volumeDown();
        break;
        case '4':
            //Action Case press 4
            softkeyHeldCallback.left();
        break;
        case '5':
            //Action Case press 5
            softkeyHeldCallback.center();
        break;
        case '6':
            //Action Case press 6
            softkeyHeldCallback.right();
        break;
        case '7':
            //Action Case press 7
            softkeyHeldCallback.left();
        break;
        case '8':
            //Action Case press 8
            softkeyHeldCallback.center();
        break;
        case '9':
            //Action Case press 9
            softkeyHeldCallback.right();
        break;
        case '*':
            //Action Case press *
            softkeyHeldCallback.left();
        break;
        case '#':
            //Action Case press #
            softkeyHeldCallback.right();
        break;
    }
};
//document.addEventListener( 'keypress' , handleKeyHeld);
document.addEventListener( 'keyup' , handleKeyUp);
document.addEventListener('keydown', handleKeyDown);
