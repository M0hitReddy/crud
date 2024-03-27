import { superbase } from "../connection.js";


const getAll = async (req, res) => {
    const { data, error } = await superbase.from('todo').select('*');
    if (error) {
        console.error(error);
        return;
    }
    res.send(data);
    // console.log(JSON.stringify(data, null, 2))
}

const getById = async (req, res) => {
    try {
        const data = await superbase.from('todo').select('*').match({ id: req.params.id });
        res.send(data.data);
    }
    catch (error) {
        console.error(error);
        return;
    }

}


const insert = async (req, res) => {
    const data = [
        {
            title: req.body.title,
            description: req.body.description
        }
    ];
    superbase.from('todo').insert(data).then((data, err) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(data);
    });
}

const update = async (req, res) => {
    try {
        await superbase
            .from('todo')
            .update({
                completed: req.body.completed
            })
            .match({ id: req.params.id });
    } catch (error) {

        console.error(error)
        return
    }
    // res.send(data,"updated");S
    res.send("updated " + req.params.id + " to " + req.body.completed);
    // console.log(JSON.stringify(data, null, 2))
}

const deleteTodo = async (req, res) => {
    try {
        await superbase
            .from('todo')
            .delete()
            .match({ id: req.params.id });
    } catch (error) {
        console.error(error)
        return
    }
    res.send("deleted " + req.params.id);
}


export { getAll, insert, update, deleteTodo, getById }