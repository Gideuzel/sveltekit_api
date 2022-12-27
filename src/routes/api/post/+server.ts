import {error, json} from '@sveltejs/kit';



export async function POST() {
    try {
        return json({message: "le post fonctionne"})
    } catch (erreur:any) {
        throw error(404, erreur.message)
    }

}

export async function GET() {
    try {
        return json({message: "le get fonctionne"})
    } catch (erreur:any) {
        throw error(404, erreur.message)
    }

}