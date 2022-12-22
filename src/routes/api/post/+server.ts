import {error, json} from '@sveltejs/kit';


/** @type {import('./$types').RequestHandler} *
 *
 * @param request
 * @constructor
 */
export async function POST({request}) {
    try {
        return json({message: "le post fonctionne"})
    } catch (erreur) {
        throw error(404, erreur.message)
    }

}   