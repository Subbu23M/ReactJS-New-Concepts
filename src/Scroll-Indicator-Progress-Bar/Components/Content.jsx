const Content = () => {
    // Helper function
    const renderContent = () => {
        return(
            <div className="mt-5">
                <p className="lead">
                I love cheese, especially feta pecorino. Jarlsberg say cheese danish fontina babybel cream cheese brie mascarpone the big cheese. Camembert de normandie hard cheese caerphilly cheeseburger pepper jack cow emmental dolcelatte. Port-salut danish fontina ricotta taleggio pecorino everyone loves.
                </p>

                <p className="lead">
                    I love cheese, especially goat cheese slices. Stilton paneer who moved my cheese melted cheese stilton manchego babybel squirty cheese. Brie stilton cheese and wine danish fontina cheese on toast cottage cheese pepper jack melted cheese. Monterey jack ricotta rubber cheese blue castello say cheese when the cheese comes out everybody's happy melted cheese cheese strings. Cut the cheese the big cheese gouda cheesy grin.
                    Cream cheese cheese and biscuits manchego. Boursin cheese and wine cheese strings hard cheese squirty cheese port-salut cottage cheese cow. Port-salut cow paneer everyone loves cheesy feet edam emmental brie. Cheddar fondue who moved my cheese lancashire camembert de normandie.
                    Roquefort cheesy grin gouda. Halloumi danish fontina bocconcini bavarian bergkase boursin cauliflower cheese fondue pepper jack. Bocconcini emmental camembert de normandie cheesy feet feta mascarpone cottage cheese cheesy grin. Ricotta.
                    Cow paneer monterey jack. Paneer feta red leicester say cheese who moved my cheese edam the big cheese pepper jack. Babybel gouda monterey jack feta cheese strings cut the cheese mozzarella fondue. Queso red leicester squirty cheese fondue swiss st. agur blue cheese.
                    Cottage cheese halloumi bocconcini. Monterey jack fromage queso fondue chalk and cheese cheese on toast boursin airedale. Swiss say cheese cheesy grin gouda bavarian bergkase cow caerphilly blue castello. Cheeseburger stilton squirty cheese.
                </p>
            </div>
        )
    }
    return(
        <div className="mx-auto py-5 w-75">
            {renderContent()}
            {renderContent()}
            {renderContent()}
            {renderContent()}
            {renderContent()}
            {renderContent()}
        </div>
    )
}

export default Content